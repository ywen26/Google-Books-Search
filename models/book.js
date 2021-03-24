const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, require: true },
  authors: [{ type: String, require: true}],
  description: String,
  link: { type: String, trim: true },
  image: { type: String, trim: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;