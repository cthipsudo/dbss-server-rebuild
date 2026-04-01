const Question = require("../models/questions");

module.exports.index = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
