const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    id: String,
    user_name: String,
    password: String,
    date_created: Date,
    date_modifed: Date
  }
)

module.exports = mongoose.model('User', UserSchema);

// CREATE TABLE dbss_users (
//   id SERIAL PRIMARY KEY,
//   user_name TEXT NOT NULL,
//   password TEXT NOT NULL,
//   date_created TIMESTAMPTZ NOT NULL DEFAULT now(),
//   date_modified TIMESTAMPTZ
// );