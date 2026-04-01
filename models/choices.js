const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema(
  {
    linkedTo: String,
    choiceType: {
      type: String,
      enum: [
        "goblin",
        "alien",
        "human",
        "space_wizard",
        "astral_thief",
        "cosmic_warrior",
        "default",
      ],
    },
    choice: String,
    alignment: {
      type: String,
      enum: ["chaotic", "neutral", "lawful"],
    },
    score: Number,
    health_lost: Number,
  },
  { versionKey: false },
);

module.exports = mongoose.model("Choice", ChoiceSchema);

// CREATE TYPE choiceLimit as ENUM ('goblin', 'alien', 'human', 'space_wizard', 'astral_thief', 'cosmic_warrior', 'default');
// CREATE TYPE responseAlignment as ENUM ('chaotic', 'neutral', 'lawful');

// CREATE TABLE dbss_choices (
//   id SERIAL PRIMARY KEY,
//   "linkedTo" TEXT REFERENCES dbss_questions(id),
//   "choiceType" choiceLimit,
//   choice TEXT NOT NULL,
//   alignment responseAlignment NOT NULL,
//   score int NOT NULL,
//   health_lost int NOT NULL
// );
