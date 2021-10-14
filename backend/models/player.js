const mongoose = require("mongoose");
const Match=require('./match')

const MatchSchema = new mongoose.Schema({
      matchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Match,
    },
    matchData: {
      battingStats: {
        runsScored: { type: Number },
        ballsFaced: { type: Number },
        boundaries: { type: Number },
        sixes: { type: Number },
        // strikerate
      },
      bowlingStats: {
        ballsThrown: { type: Number },
        runsConceded: { type: Number },
        wicketsTaken: { type: Number },
        // economy
      },
    },
  });
  
//   MatchSchema.path('battingStats').schema.virtual("strikerate").get(function () {
//     return this.runsScored / this.ballsFaced;
//   });
  
//   MatchSchema.path('bowlingStats').schema.virtual("economy").get(function () {
//       return this.runsConceded / this.ballsThrown;
//     });
    



const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  matches: [MatchSchema],
});



module.exports = new mongoose.model("Player", PlayerSchema);
