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
