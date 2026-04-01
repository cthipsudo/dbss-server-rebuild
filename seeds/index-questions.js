const questionData = require("./questions");
const Question = require("../models/questions");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbss");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

const seedDB = async () => {
  await Question.deleteMany({});

  for (let question of questionData) {
    const questionEntry = await new Question(question);
    await questionEntry.save();
  }

  console.log("Job's done!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
