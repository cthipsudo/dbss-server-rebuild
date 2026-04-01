const Response = require("../models/responses");

module.exports.index = async (req, res) => {
  const responses = await Response.find();
  res.json(responses);
};
