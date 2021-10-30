const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Match = require("./matches");
const Player = require('./players')

const BallSchema = new Schema({
  matchId: {
    type: Schema.Types.ObjectId,
    ref: 'Match',
  },
  innings: {
    type: String,
    enum: ["1st", "2nd"],
  },
  ballNumber: { type: Number },
  ballType: { type: String },
  runType: { type: String },
  dismissalType: { type: String },

  onStrikeBatsman: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  nonStrikeBatsman: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  bowler: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },

});

module.exports = new mongoose.model("MatchBall", BallSchema);
