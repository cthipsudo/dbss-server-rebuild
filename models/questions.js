const mongoose = require("mongoose");
const { required } = require("joi");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    id: String,
    linkedTo: String,
    question: String
  }
);

module.exports = mongoose.model("Question", QuestionSchema);
