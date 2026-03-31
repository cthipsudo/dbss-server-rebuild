if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // need this for .env
}

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/dbss";

mongoose.connect(db_url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

app.listen(3000, () => {
  console.log("App is listening!");
});
