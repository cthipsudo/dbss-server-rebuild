const Question = require("../models/questions");

module.exports.index = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};
