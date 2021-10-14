const mongoose= require("mongoose");
const Schema=mongoose.Schema

const MatchSchema = new Schema({
  team1: {
    name: { type:String },
    players: {
      type: Array,
    //   ref: Players,
    },
  },
  team2: {
    name: { type: String},
    players: {
      type: Array,
    //   ref: Players,
    },
  },
  firstInning:{
      battingTeam:{type:String},
      bowlingTeam:{type:String},
      totalRuns:{type:Number},
      totalBalls:{type:Number},
      totalWickets:{type:Number},
  },
  secondInning:{
    battingTeam:{type:String},
    bowlingTeam:{type:String},
    totalRuns:{type:Number},
    totalBalls:{type:Number},
    totalWickets:{type:Number},
}
});

module.exports=new mongoose.model('Match',MatchSchema)