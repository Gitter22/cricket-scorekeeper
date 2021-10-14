const mongoose = require("mongoose");
const Player = require("./models/player");

mongoose
  .connect("mongodb://localhost:27017/cricketscorekeeper")
  .then(() => {
    console.log("database connection successul");
  })
  .catch((e) => {
    console.log("Something went wrong with the database", e);
  });

const playerseed = [
];

const seedData = async () => {
  const players = await Player.insertMany(playerseed);
  console.log(players);
};

const clearSeed = async () => {
  await Player.deleteMany({});
};

const runseed = async () => {
  await clearSeed()
  await seedData()
}

runseed()
