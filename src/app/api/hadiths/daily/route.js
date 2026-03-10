import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Hadith from "@/models/Hadith";

// Returns a deterministic set of 3 hadiths per day.
// The selection changes daily but stays the same throughout the day.
function getDailyIndices(total) {
  const now = new Date();
  const seed =
    now.getUTCFullYear() * 10000 +
    (now.getUTCMonth() + 1) * 100 +
    now.getUTCDate();

  // Use three different prime multipliers to spread indices across the collection
  const i1 = seed % total;
  const i2 = (seed * 1000003) % total;
  const i3 = (seed * 2000003) % total;

  // Deduplicate in the rare case of collision
  const indices = [...new Set([i1, i2, i3])];

  // Fill up to 3 if there were collisions
  let extra = (seed * 3000007) % total;
  while (indices.length < 3 && indices.length < total) {
    if (!indices.includes(extra)) indices.push(extra);
    extra = (extra + 1) % total;
  }

  return indices;
}

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const book = searchParams.get("book");

    const filter = book ? { bookSlug: book } : {};

    const total = await Hadith.countDocuments(filter);

    if (total === 0) {
      const msg = book ? `No hadiths found for book "${book}"` : "No hadiths found";
      return NextResponse.json({ success: false, error: msg }, { status: 404 });
    }

    const indices = getDailyIndices(total);

    const hadiths = await Promise.all(
      indices.map((index) => Hadith.findOne(filter).skip(index).lean())
    );

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    return NextResponse.json({
      success: true,
      date: today,
      ...(book && { book }),
      data: hadiths.filter(Boolean),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
