const choicesData = require("./choices");
const Choice = require("../models/choices");
// const { descriptors, places } = require("./seedHelpers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbss");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

const seedDB = async () => {
  await Choice.deleteMany({});

  for (let choice of choicesData) {
    const choiceEntry = await new Choice(choice);
    await choiceEntry.save();
  }

  console.log("Job's done!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
