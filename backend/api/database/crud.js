const db = require("./database");

// CREATE
const createBook = (title, author, genre, publicationDate, isbn, callback) => {
  console.log("creating book");
  const query =
    "INSERT INTO books(title, author, genre, publicationDate, isbn) VALUES (?, ?, ?, ?, ?)";
  db.run(query, [title, author, genre, publicationDate, isbn], (err) => {
    callback(err, { id: this.lastID });
  });
};

const readAllBooks = (
  title,
  author,
  startDate,
  endDate,
  genre,
  isbn,
  callback
) => {
  const query = `SELECT *
                  FROM books
                  WHERE UPPER(title) LIKE UPPER("%${title}%") 
                  AND UPPER(author) LIKE UPPER("%${author}%")
                  AND UPPER(genre) LIKE UPPER("%${genre}%") 
                  AND publicationDate >= '${startDate}' AND publicationDate <= '${endDate}' 
                  AND isbn LIKE "%${isbn}%"
                `;
  db.all(query, [], callback);
};

const updateBook = (
  id,
  title,
  author,
  genre,
  publicationDate,
  isbn,
  callback
) => {
  const query =
    "UPDATE books SET title = ?, author = ?, genre = ?, publicationDate = ?, isbn = ? WHERE entryId = ?";
  db.run(query, [title, author, genre, publicationDate, isbn, id], callback);
};

const deleteBook = (id, callback) => {
  const query = "DELETE FROM books WHERE entryId = ?";
  db.run(query, id, callback);
};

module.exports = {
  createBook,
  readAllBooks,
  updateBook,
  deleteBook,
};
