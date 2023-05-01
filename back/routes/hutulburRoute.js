const express = require("express");
const router = express.Router();

const {
  getHutulburs,
  editHutulbur,
  postHutulbur,
} = require("../controller/hutulburController");
router
  .get("/", getHutulburs)
  .post("/", postHutulbur)
  .post("/:id", editHutulbur);

module.exports = router;
