const mongoose = require("mongoose");
const MatchBall = require("./models/matchball");
const matches = require("./models/matches");
const Team = require('./models/teams')

mongoose
  .connect("mongodb://localhost:27017/cricketscorekeeper")
  .then(() => {
    console.log("database connection successul");
  })
  .catch((e) => {
    console.log("Something went wrong with the database", e);
  });





matchballSeedgenerator = (match) => {
  let matchballseed = []
  let team1Players = match.team1.players;
  let team2Players = match.team2.players

  let ballType = ["No Ball", "Wide"]
  let dismissalType = ["Bowled", "Caught", "Run Out", "LBW", "Hit Wicket"]
  let i = 0;
  let j = 0
  while (i < team1Players.length - 1) {
    let c = Math.random()
    let ballEvent = Math.random() > 0.3 ? "Legal" : ballType[Math.floor(Math.random() * 2)]
    let byeEvent = Math.random() > 0.3 ? "None" : "Bye"
    let runs = Math.floor(Math.random() * 6)
    let lastball = matchballseed[j - 1] ? matchballseed[j - 1].ballNumber : 0
    let lastBallOver = matchballseed[j - 1] ? matchballseed[j - 1].overNumber : 1
    let lastoverBowler = matchballseed[j - 1] ? matchballseed[j - 1].bowler : team2Players[0]

    matchballseed.push({
      matchId: match._id,
      innings: 1,
      ballSequence: j + 1,
      noBallRuns: ballEvent === "No Ball" ? 1 : 0,
      wideRuns: ballEvent === "Wide" ? runs + 1 : 0,
      byeRuns: ballEvent === "Wide" ? 0 : byeEvent === "Bye" ? runs : 0,
      dismissalType: c > 0.1 ? "None" : dismissalType[[Math.floor(Math.random() * dismissalType.length)]],
      didPlayersCross: c > 0.5 ? true : false,
      onStrikeBatsman: team1Players[i],
      nonStrikeBatsman: team1Players[i + 1],
      bowler: lastball === 6 ? team2Players[Math.floor(Math.random() * team2Players.length)] : lastoverBowler,
      overNumber: lastball === 6 ? lastBallOver + 1 : lastBallOver,
      ballNumber: ballEvent === "Legal" ? (lastball === (6 || 0) ? 1 : lastball + 1) : (lastball === (6 || 0) ? 0 : lastball),
      batsmanRuns: ballEvent === "Wide" ? 0 : byeEvent === "Bye" ? 0 : runs,
      bowlerRuns: 0,
      teamRuns: 0
    })
    let noball = matchballseed[j].noBallRuns
    let batsman = matchballseed[j].batsmanRuns
    let wide = matchballseed[j].wideRuns
    matchballseed[j].bowlerRuns = batsman + noball + wide,
      matchballseed[j].teamRuns = matchballseed[j].bowlerRuns + matchballseed[j].byeRuns
    if (c < 0.1) {
      i++
    }
    j++
  }



  i = 0;
  j = 0;
  while (i < team2Players.length - 1) {
    let c = Math.random()
    let ballEvent = Math.random() > 0.3 ? "Legal" : ballType[Math.floor(Math.random() * 2)]
    let byeEvent = Math.random() > 0.3 ? "None" : "Bye"
    let runs = Math.floor(Math.random() * 6)
    let lastball = matchballseed[j - 1] ? matchballseed[j - 1].ballNumber : 0
    let lastBallOver = matchballseed[j - 1] ? matchballseed[j - 1].overNumber : 0
    let lastoverBowler = matchballseed[j - 1] ? matchballseed[j - 1].bowler : team1Players[0]

    matchballseed.push({
      matchId: match._id,
      innings: 2,
      ballSequence: j + 1,
      noBallRuns: ballEvent === "No Ball" ? 1 : 0,
      wideRuns: ballEvent === "Wide" ? runs + 1 : 0,
      byeRuns: ballEvent === "Wide" ? 0 : byeEvent === "Bye" ? runs : 0,
      dismissalType: c > 0.1 ? "None" : dismissalType[[Math.floor(Math.random() * 5)]],
      didPlayersCross: Math.random() > 0.5 ? true : false,
      onStrikeBatsman: team2Players[i],
      nonStrikeBatsman: team2Players[i + 1],
      bowler: lastball === 6 ? team1Players[Math.floor(Math.random() * team1Players.length)] : lastoverBowler,
      overNumber: lastball === 6 ? lastBallOver + 1 : lastBallOver,
      ballNumber: ballEvent === "Legal" ? (lastball === (6 || 0) ? 1 : lastball + 1) : (lastball === (6 || 0) ? 0 : lastball),
      batsmanRuns: ballEvent === "Wide" ? 0 : byeEvent === "Bye" ? 0 : runs,
      bowlerRuns: 0,
      teamRuns: 0
    })
    let noball = matchballseed[j].noBallRuns
    let batsman = matchballseed[j].batsmanRuns
    let wide = matchballseed[j].wideRuns
    matchballseed[j].bowlerRuns = batsman + noball + wide,
      matchballseed[j].teamRuns = matchballseed[j].bowlerRuns + matchballseed[j].byeRuns
    if (c < 0.1) {
      i++
    }
    j++
  }
  return matchballseed
}

const getMatches = async () => {
  const data = await matches.find({}).populate('team1').populate('team2')
  return data
}

const seedData = async () => {
  const matches = await getMatches()
  console.log("Step1 completed")
  for (match of matches) {
    const matchballs = await MatchBall.insertMany(matchballSeedgenerator(match));
    console.log("matchball added")
  }
  console.log("Completed")
};

const clearSeed = async () => {
  await MatchBall.deleteMany({});
};

const runseed = async () => {
  await clearSeed();
  await seedData();

};

runseed();
