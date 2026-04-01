const express = require("express");
const router = express.Router();
const responses = require("../controllers/responses");

router.route("/").get(responses.index);

module.exports = router;
