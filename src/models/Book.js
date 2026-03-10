import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    bookSlug: String,
    apiId: Number,
    bookName: String,
    writerName: String,
    writerDeath: String,
    aboutWriter: String,
    chapters_count: Number,
    hadiths_count: Number,
  },
  { collection: "books" }
);

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
