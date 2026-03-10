import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Hadith from "@/models/Hadith";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    // Pagination
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const per_page = Math.min(100, Math.max(1, parseInt(searchParams.get("paginate") || "25", 10)));
    const skip = (page - 1) * per_page;

    // Build filter
    const filter = {};

    const book = searchParams.get("book");
    if (book) filter.bookSlug = book;

    const hadithNumber = searchParams.get("hadithNumber");
    if (hadithNumber) filter.hadithNumber = hadithNumber;

    const chapter = searchParams.get("chapter");
    if (chapter) filter.chapterId = parseInt(chapter, 10);

    const status = searchParams.get("status");
    if (status) filter.status = { $regex: new RegExp(`^${status}$`, "i") };

    const hadithEnglish = searchParams.get("hadithEnglish");
    if (hadithEnglish) filter["text.english"] = { $regex: new RegExp(hadithEnglish, "i") };

    const hadithUrdu = searchParams.get("hadithUrdu");
    if (hadithUrdu) filter["text.urdu"] = { $regex: new RegExp(hadithUrdu, "i") };

    const hadithArabic = searchParams.get("hadithArabic");
    if (hadithArabic) filter["text.arabic"] = { $regex: new RegExp(hadithArabic, "i") };

    const [data, total] = await Promise.all([
      Hadith.find(filter).skip(skip).limit(per_page).lean(),
      Hadith.countDocuments(filter),
    ]);

    return NextResponse.json({
      success: true,
      data,
      pagination: {
        total,
        page,
        per_page,
        total_pages: Math.ceil(total / per_page),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
