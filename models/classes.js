const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
  {
    id: String,
    class_name: String
  }
);

module.exports = mongoose.model('Class', ClassSchema)