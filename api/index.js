const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const {
  createBook,
  readAllBooks,
  updateBook,
  deleteBook,
} = require("./database/crud");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/books", require("./routes/bookRoutes"));

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.use(errorHandler);

// app.get("/api/books", (req, res) => {
//   readAllBooks((err, rows) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(200).json(rows);
//     }
//   });
// });

// app.post("/api/books", (req, res) => {
//   const { title, author, genre, publicationDate, isbn } = req.body;
//   createBook(title, author, genre, publicationDate, isbn, (err, data) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(200).send({
//         message: "Book has been succesfully added",
//         bookId: data.entryID,
//       });
//     }
//   });
// });

// app.put("/api/books/:id", (req, res) => {
//   const { title, author, genre, publicationDate, isbn } = req.body;
//   const { id } = req.params;

//   updateBook(id, title, author, genre, publicationDate, isbn, (err) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(200).send({
//         message: "Book has been succesfully updates",
//       });
//     }
//   });
// });

// app.delete("/api/books/:id", (req, res) => {
//   const { id } = req.params;

//   deleteBook(id, (err) => {
//     if (err) {
//       res.status(500).send(err.message);
//     } else {
//       res.status(200).send({ message: "The book was succesfuly deleted" });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Node API app is running on port ${port}`);
});
