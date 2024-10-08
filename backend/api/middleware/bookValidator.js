const genres = require("../utilities/genres");

// Creates custom error based on the problems of the user input (used for adding and updating database)
const validateBook = (title, author, genre, publicationDate, isbn) => {
  errors = {};

  if (title === undefined) {
    errors["title"] = "Title is required";
  } else if (title.length >= 50) {
    errors["title"] = "Title must not exceed 50 characters";
  } else if (title.length === 0) {
    errors["title"] = "Title must have at least 1 character";
  }

  // author
  if (author === undefined) {
    errors["author"] = "Author is required";
  } else if (author.length >= 50) {
    errors["author"] = "Author must not exceed 50 characters";
  } else if (author.length === 0) {
    errors["author"] = "Author must have at least 1 character";
  }

  // genre
  if (genre === undefined) {
    errors["genre"] = "Genre is required";
  }
  if (genre === "Select a Genre") {
    errors["genre"] = "Please select a genre";
  }

  // publication date
  if (publicationDate === undefined) {
    errors["publicationDate"] = "Publication date is required";
  } else if (!Date.parse(publicationDate, "yyyy-MM-dd")) {
    errors["publicationDate"] = "Please enter a valid date";
  }

  if (isbn === undefined) {
    // ISBN
    errors["isbn"] = "ISBN code required";
  } else if (isbn.length !== 10 && isbn.length !== 13) {
    errors["isbn"] = "ISBN codes must be 10 or 13 characters";
  }

  return errors;
};

module.exports = validateBook;
