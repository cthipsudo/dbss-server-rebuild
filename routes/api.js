const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  console.log("Hitting the base API");
  res.send("Hello, welcome to the DBSS API");
});

module.exports = router;
