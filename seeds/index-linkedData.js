const choicesData = require("./choices");
const Choice = require("../models/choices");
const { deleteEntries, insertEntries } = require("./seedHelpers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbss");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

// function deleteEntries(obj) {
//   return obj.deleteMany({});
// }

// async function insertEntries(data, Obj) {
//   for (let row of data) {
//     const rowEntry = await new Obj(row);
//     await rowEntry.save();
//   }
// }

const seedDB = async () => {
  await deleteEntries(Choice);
  await insertEntries(choicesData, Choice);

  console.log("Job's done!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
