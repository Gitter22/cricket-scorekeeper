const mongoose = require("mongoose");
const Schema = mongoose.Schema

const MatchSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  location: {
    type: String,
  },
  status: {
    type: String,
  }
});

module.exports = new mongoose.model('Match', MatchSchema)