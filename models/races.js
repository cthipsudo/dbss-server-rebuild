const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema(
  {
    race_name: String,
  },
  { versionKey: false },
);

module.exports = mongoose.model("Race", RaceSchema);
