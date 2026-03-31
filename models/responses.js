const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema(
  {
    id: String,
    linkedTo: {
      type: Schema.Types.ObjectId,
      ref: "Question",
    }, // References question
    alignment: {
      type: String,
      enum: ["lawful", "neutral", "chaotic"],
    },
    response: String,
    game_ending: Boolean,
  },
  { versionKey: false },
);

module.exports = mongoose.model("Response", ResponseSchema);
