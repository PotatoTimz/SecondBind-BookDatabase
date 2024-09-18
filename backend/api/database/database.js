const sqlite3 = require("sqlite3").verbose();
const dbName = "myDatabase.db";

/*
 Creates the table book for the database
 Attributes:
  entryID: PK and autoincrements
  title: Unique
  author:
  genre: must be one of the predefined genres
  publicationDate
  isbn: must be 10 or 13 characters and must be unique
*/

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to the database!");
    db.run(
      `CREATE TABLE IF NOT EXISTS books (
        entryID INTEGER PRIMARY KEY AUTOINCREMENT, 
        title VARCHAR(50) UNIQUE NOT NULL, 
        author VARCHAR(50) NOT NULL, 
        genre VARCHAR(50) NOT NULL, 
        publicationDate DATE NOT NULL, 
        isbn VARCHAR(13) UNIQUE NOT NULL,
        CONSTRAINT chk_genre CHECK (genre IN ("Fiction", "Mystery", "Non-Fiction", "Historical", "Romance", "Horror", "Comedy", "Fantasy", "Biography", "Thriller", "Crime", "Poetry", "Adventure"))
        CONSTRAINT chk_isbn CHECK (LENGTH(isbn) == 10 OR LENGTH(isbn) == 13)
      )`,
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Table existed or created");
        }
      }
    );
  }
});

module.exports = db;
