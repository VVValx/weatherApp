const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Watch Movies",
  });
});

module.exports = router;
