const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  author: String,
  genre: String,
  price: Number,
  stock: { type: Number, default: 0 },
  publishedYear: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", bookSchema);