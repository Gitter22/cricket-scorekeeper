const mongoose = require("mongoose");
const MatchBall = require("./models/matchball");

mongoose
  .connect("mongodb://localhost:27017/cricketscorekeeper")
  .then(() => {
    console.log("database connection successul");
  })
  .catch((e) => {
    console.log("Something went wrong with the database", e);
  });





matchballSeedgenerator = (n, id) => {
  let matchballseed = []
  let onStrikePlayers = ["6174e14b6b22c0ffc51e3b32", "6174df946b22c0ffc51e3b2a", "6174defd6b22c0ffc51e3b28", "6174dfee6b22c0ffc51e3b2c"]
  let nonStrikePlayers = ["6174e0856b22c0ffc51e3b2e", "6174e0f76b22c0ffc51e3b30", "6174defd6b22c0ffc51e3b28"]
  let bowler = ["6174e3b3ec1d2e5f9e37efc9", "6174e0f76b22c0ffc51e3b30", "6174defd6b22c0ffc51e3b28"]
  let runs = Math.floor(Math.random() * 6)
  let ballType = ["Legal", "No Ball", "Wide"]

  let byeType = ["None", "Bye"]

  let dismissalType = ["Bowled", "Caught", "Run Out", "LBW", "Hit Wicket"]
  for (i = 0; i < n; i++) {
    let a = ballType[Math.floor(Math.random() * 3)]
    let b = byeType[Math.floor(Math.random() * 2)]
    matchballseed.push({
      matchId: id,
      innings: i < 300 ? 1 : 2,
      ballSequence: i + 1,
      noBallRuns: a === "No Ball" ? byeType === 'Bye' ? 1 : runs + 1 : 0,
      wideRuns: a === "Wide" ? runs + 1 : 0,
      byeRuns: b === "Bye" ? runs : 0,
      dismissalType: Math.random() > 0.5 ? "None" : dismissalType[[Math.floor(Math.random() * 5)]],
      didPlayersCross: Math.random() > 0.5 ? true : false,
      onStrikeBatsman: onStrikePlayers[Math.floor(Math.random() * onStrikePlayers.length)],
      nonStrikeBatsman: nonStrikePlayers[Math.floor(Math.random() * nonStrikePlayers.length)],
      bowler: bowler[Math.floor(Math.random() * bowler.length)],
      overNumber: i < 300 ? Math.floor((i / 6)) + 1 : Math.floor((i + - 300) / 6) + 1,
      ballNumber: (i + 1) % 6 === 0 ? 6 : (i + 1) % 6,
      batsmanRuns: a === "Wide" ? 0 : b === "Bye" ? 0 : runs
    })
  }
  return matchballseed
}

const seedData = async () => {
  const matchballs = await MatchBall.insertMany(matchballSeedgenerator(600, "617d0974bac867b4354bad70"));
  console.log(matchballs);
};

const clearSeed = async () => {
  await MatchBall.deleteMany({});
};

const runseed = async () => {
  await clearSeed();
  await seedData();
};

runseed();
