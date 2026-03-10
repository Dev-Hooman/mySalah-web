import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Book from "@/models/Book";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const per_page = Math.min(100, Math.max(1, parseInt(searchParams.get("paginate") || "25", 10)));
    const skip = (page - 1) * per_page;

    const [data, total] = await Promise.all([
      Book.find({}).skip(skip).limit(per_page).lean(),
      Book.countDocuments({}),
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
