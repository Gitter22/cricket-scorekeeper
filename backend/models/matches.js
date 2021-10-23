const mongoose = require("mongoose");
const Schema = mongoose.Schema
const Teams = require('./teams')

const MatchSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref: Teams,
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: Teams,
  },
  location: {
    type: String,
  }
});

module.exports = new mongoose.model('Match', MatchSchema)