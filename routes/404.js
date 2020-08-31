const express = require("express");
const router = express.Router();

const location = "Helsinki";
router.get("/", (req, res) => {
  res.render("404");
});

module.exports = router;
