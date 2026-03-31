const mongoose = require("mongoose");
const { required } = require("joi");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    linkedTo: String,
    question: String,
  },
  { versionKey: false },
);

module.exports = mongoose.model("Question", QuestionSchema);
