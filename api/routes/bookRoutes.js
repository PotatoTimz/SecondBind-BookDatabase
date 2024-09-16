const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  postBook,
  putBook,
  delBook,
} = require("../controllers/bookControllers");

router.route("/").get(getAllBooks).post(postBook);
router.route("/:id").put(putBook).delete(delBook);

module.exports = router;
