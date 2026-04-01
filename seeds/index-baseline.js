if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // need this for .env
}

const questionData = require("./questions");
const Question = require("../models/questions");
const classData = require("./classes");
const CharClass = require("../models/classes");
const raceData = require("./races");
const CharRace = require("../models/races");
const choiceData = require("./choices");
const Choice = require("../models/choices");
const responseData = require("./responses");
const Response = require("../models/responses");
const { deleteEntries, insertEntries } = require("./seedHelpers");
const mongoose = require("mongoose");

const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/dbss";
mongoose.connect(db_url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

const seedDB = async () => {
  await deleteEntries(Question);
  await deleteEntries(CharClass);
  await deleteEntries(CharRace);
  await deleteEntries(Choice);
  await deleteEntries(Response);

  await insertEntries(questionData, Question);
  await insertEntries(classData, CharClass);
  await insertEntries(raceData, CharRace);
  await insertEntries(choiceData, Choice);
  await insertEntries(responseData, Response);

  console.log("Job's done!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
