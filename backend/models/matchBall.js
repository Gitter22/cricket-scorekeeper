const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BallSchema = new Schema({
  matchId: {
    type: Schema.Types.ObjectId,
    ref: 'Match',
  },
  innings: { type: Number, },
  ballSequence: { type: Number },
  noBallRuns: { type: Number },
  wideRuns: { type: Number },
  byeRuns: { type: Number },
  batsmanRuns: { type: Number },
  bowlerRuns: { type: Number },
  teamRuns: { type: Number },
  overNumber: { type: Number },
  ballNumber: { type: Number },
  didPlayersCross: { type: Boolean },
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
