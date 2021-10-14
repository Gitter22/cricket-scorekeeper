const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Match = require("./match");
const Player = require('./player')

const BallSchema = new Schema({
  matchId: {
    type: Schema.Types.ObjectId,
    ref: Match,
  },
  innings: {
    type: String,
    enum: ["1st", "2nd"],
  },
  ballNumber: { type: Number },
  bowler: {
    type: Schema.Types.ObjectId,
    ref: Player,
  },
  onStrikeBatsman: {
    type: Schema.Types.ObjectId,
    ref: Player,
  },
  nonStrikeBatsman: {
    type: Schema.Types.ObjectId,
    ref: Player,
  },
  runs: { type: Number },
  event: {
    type: String,
    enum: ["dotball", "single", "double", "3Runs", "boundary", "six", "wicket"],
  },
});

module.exports = new mongoose.model("MatchBall", BallSchema);
