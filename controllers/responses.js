const Response = require("../models/responses");

module.exports.index = async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
