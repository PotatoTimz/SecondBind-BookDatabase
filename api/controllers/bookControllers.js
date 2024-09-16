const asyncHandler = require("express-async-handler");
const {
  createBook,
  updateBook,
  deleteBook,
  readAllBooks,
} = require("../database/crud");

const getAllBooks = asyncHandler(async (req, res) => {
  readAllBooks((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

const postBook = asyncHandler(async (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.body;

  createBook(title, author, genre, publicationDate, isbn, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send({
        message: "Book has been succesfully added",
        bookId: data.entryID,
      });
    }
  });
});

const putBook = asyncHandler(async (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.body;
  const { id } = req.params;

  updateBook(id, title, author, genre, publicationDate, isbn, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send({
        message: "Book has been succesfully updates",
      });
    }
  });
});

const delBook = asyncHandler(async (req, res) => {
  const { id } = req.params;

  deleteBook(id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send({ message: "The book was succesfuly deleted" });
    }
  });
});

module.exports = { getAllBooks, postBook, putBook, delBook };
