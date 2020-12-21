const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    etage: {type: String},
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    publisher: { type: String },
    publishedDate: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;