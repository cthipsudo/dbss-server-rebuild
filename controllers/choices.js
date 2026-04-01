const Choices = require("../models/choices");

module.exports.index = async (req, res) => {
  try {
    const choices = await Choices.find();
    res.json(choices);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
