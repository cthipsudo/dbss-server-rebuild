const express = require("express");
const router = express.Router();

router.route("/choices").get((req, res) => {
  console.log("I work!");
  res.send("Hi!");
});

module.exports = router;
