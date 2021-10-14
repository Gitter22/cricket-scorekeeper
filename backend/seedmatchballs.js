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

const matchballseed = [
  {
    matchId: "613c62b11a9ba346474aeb20",
    innings: "1st",
    ballNumber: 1,
    bowler: "613c6592e78d63778cb53f72",
    onStrikeBatsman: "613c6592e78d63778cb53f75",
    nonStrikeBatsman: "613c6592e78d63778cb53f75",
    runs: 2,
    event: "double",
  },
  {
    matchId: "613c62b11a9ba346474aeb20",
    innings: "1st",
    ballNumber: 2,
    bowler: "613c6592e78d63778cb53f72",
    onStrikeBatsman: "613c6592e78d63778cb53f72",
    nonStrikeBatsman: "613c6592e78d63778cb53f72",
    runs: 4,
    event: "boundary",
  },
];

const seedData = async () => {
  const matchballs = await MatchBall.insertMany(matchballseed);
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
