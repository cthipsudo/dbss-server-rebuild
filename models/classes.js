const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
  {
    class_name: String,
  },
  { versionKey: false },
);

module.exports = mongoose.model("Class", ClassSchema);
