const sqlite3 = require("sqlite3").verbose();
const dbName = "myDatabase.db";

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Conencted to the database!");
    db.run(
      `CREATE TABLE IF NOT EXISTS books (
        entryID INTEGER PRIMARY KEY AUTOINCREMENT, 
        title VARCHAR(50), 
        author VARCHAR(50), 
        genre VARCHAR(50), 
        publicationDate DATE, 
        isbn TEXT
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
