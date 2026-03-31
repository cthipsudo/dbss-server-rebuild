const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema(
  {
    id: String,
    race_name: String
  }
)

module.exports = mongoose.model('Race', RaceSchema);