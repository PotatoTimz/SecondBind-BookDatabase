/*
  Routes that the client can use to access the server / API
*/
const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookTotal,
  postBook,
  putBook,
  delBook,
} = require("../controllers/bookControllers");

router.route("/").get(getAllBooks).post(postBook);
router.route("/:id").put(putBook).delete(delBook);

module.exports = router;
