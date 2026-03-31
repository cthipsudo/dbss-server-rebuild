const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaveSchema = new Schema(
  {
    id: String,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }, // References User
    slot_num: Number,
    char_name: String,
    char_class: {
      type: Schema.Types.ObjectId,
      ref: 'Class'
    }, // References Class
    char_race: {
      type: Schema.Types.ObjectId,
      ref: 'Race'
    } // Reference Race
  }
)

module.exports = mongoose.model('Save', SaveSchema);