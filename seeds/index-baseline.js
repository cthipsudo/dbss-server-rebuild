const questionData = require("./questions");
const Question = require("../models/questions");
const classData = require("./classes");
const CharClass = require("../models/classes");
const raceData = require("./races");
const CharRace = require("../models/races");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbss");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

function deleteEntries(obj) {
  return obj.deleteMany({});
}

async function insertEntries(data, Obj) {
  for (let row of data) {
    const rowEntry = await new Obj(row);
    await rowEntry.save();
  }
}

const seedDB = async () => {
  await deleteEntries(Question);
  await deleteEntries(CharClass);
  await deleteEntries(CharRace);

  await insertEntries(questionData, Question);
  await insertEntries(classData, CharClass);
  await insertEntries(raceData, CharRace);

  // for (let question of questionData) {
  //   const questionEntry = await new Question(question);
  //   await questionEntry.save();
  // }

  console.log("Job's done!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
