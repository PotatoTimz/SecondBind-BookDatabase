const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/books", require("./routes/bookRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Node API app is running on port ${port}`);
});
