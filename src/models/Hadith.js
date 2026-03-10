import mongoose from "mongoose";

const HadithSchema = new mongoose.Schema(
  {
    bookSlug: String,
    hadithNumber: String,
    apiId: Number,
    chapterId: Number,
    volume: String,
    status: String,
    narratorEnglish: String,
    narratorUrdu: String,
    heading: {
      english: String,
      urdu: String,
      arabic: String,
    },
    text: {
      english: String,
      urdu: String,
      arabic: String,
    },
  },
  { collection: "hadiths" }
);

export default mongoose.models.Hadith || mongoose.model("Hadith", HadithSchema);
