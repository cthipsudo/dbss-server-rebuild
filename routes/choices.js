const express = require("express");
const router = express.Router();
const choices = require("../controllers/choices");

router.route("/").get(choices.index);

module.exports = router;
