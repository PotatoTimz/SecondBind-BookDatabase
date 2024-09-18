const asyncHandler = require("express-async-handler");

const {
  createBook,
  updateBook,
  deleteBook,
  readAllBooks,
} = require("../database/crud");
const bookValidator = require("../middleware/bookValidator");

const getAllBooks = asyncHandler(async (req, res) => {
  const title = req.query.title || "";
  const author = req.query.author || "";
  const startDate = req.query.startDate || "0000-00-00";
  const endDate = req.query.endDate || "3000-01-01";
  const genre = req.query.genre || "";
  const ibsn = req.query.isbn || "";

  readAllBooks(title, author, startDate, endDate, genre, ibsn, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

const postBook = asyncHandler(async (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.body;
  const errors = bookValidator(title, author, genre, publicationDate, isbn);

  if (Object.keys(errors).length === 0) {
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
  } else {
    res.status(400).send(errors);
  }
});

const putBook = asyncHandler(async (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.body;
  const { id } = req.params;
  const errors = bookValidator(title, author, genre, publicationDate, isbn);

  if (Object.keys(errors).length === 0) {
    updateBook(id, title, author, genre, publicationDate, isbn, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({
          message: "Book has been succesfully updates",
        });
      }
    });
  } else {
    res.status(400).send(errors);
  }
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
