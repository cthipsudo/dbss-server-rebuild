if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // need this for .env
}

const express = require("express");
const app = express();
const path = require("path");
const engine = require("ejs-mate");
const helmet = require("helmet");
const cors = require("cors");
const choicesRoute = require("./routes/choices");
const apiRoute = require("./routes/api");
const questionsRoute = require("./routes/questions");
const responsesRoute = require("./routes/responses");

const mongoose = require("mongoose");
const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/dbss";
mongoose.connect(db_url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!");
});

app.engine("ejs", engine);
app.use(helmet());
app.use(cors({ origin: "https://dbss-client.vercel.app" }));

app.use("/api", apiRoute);
app.use("/api/choices", choicesRoute);
app.use("/api/questions", questionsRoute);
app.use("/api/responses", responsesRoute);

app.listen(3000, () => {
  console.log("App is listening!");
});
