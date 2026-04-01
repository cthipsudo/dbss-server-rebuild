const express = require("express");
const router = express.Router();
const questions = require("../controllers/questions");

router.route("/").get(questions.index);

module.exports = router;
