const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreboardSchema = new Schema(
  {
    id: String,
    nick_name: String,
    score: Number,
    date_created: Date
  }
)

module.exports = mongoose.model('Scoreboard', ScoreboardSchema)

/*
CREATE TABLE dbss_scoreboard (
  id SERIAL PRIMARY KEY,
  nick_name TEXT NOT NULL,
  score INT NOT NULL,
  date_created TIMESTAMPTZ NOT NULL DEFAULT now()
);
*/