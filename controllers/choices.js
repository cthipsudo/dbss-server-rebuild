const Choices = require("../models/choices");

module.exports.index = async (req, res) => {
  const choices = await Choices.find();
  res.json(choices);
};
