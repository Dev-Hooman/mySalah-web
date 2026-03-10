import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema(
  {
    bookSlug: String,
    chapterNumber: String,
    apiId: Number,
    chapterArabic: String,
    chapterEnglish: String,
    chapterUrdu: String,
  },
  { collection: "chapters" }
);

export default mongoose.models.Chapter || mongoose.model("Chapter", ChapterSchema);
