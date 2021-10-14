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
  {
    name: "Kohli",
    matches: [
      {
        matchId: "613c62b11a9ba346474aeb20",
        matchData: {
          battingStats: {
            runsScored: 15,
            ballsFaced: 22,
            boundaries: 1,
            sixes: 3,
          },
          bowlingStats: {
            ballsThrown: 12,
            runsConceded: 5,
            wicketsTaken: 1,
          },
        },
      },
      {
        matchId: "613c62b11a9ba346474aeb20",
        matchData: {
          battingStats: {
            runsScored: 15,
            ballsFaced: 22,
            boundaries: 1,
            sixes: 3,
          },
          bowlingStats: {
            ballsThrown: 12,
            runsConceded: 5,
            wicketsTaken: 1,
          },
        },
      },
    ],
  },
  {
    name: "Kohli",
    matches: [
      {
        matchId: "",
        matchData: {
          battingStats: {
            runsScored: 15,
            ballsFaced: 22,
            boundaries: 1,
            sixes: 3,
          },
          bowlingStats: {
            ballsThrown: 12,
            runsConceded: 5,
            wicketsTaken: 1,
          },
        },
      },
      {
        matchId: "",
        matchData: {
          battingStats: {
            runsScored: 15,
            ballsFaced: 22,
            boundaries: 1,
            sixes: 3,
          },
          bowlingStats: {
            ballsThrown: 12,
            runsConceded: 5,
            wicketsTaken: 1,
          },
        },
      },
    ],
  },
];

const seedData = async () => {
  const players = await Player.insertMany(playerseed);
  console.log(players);
};

const clearSeed = async () => {
  await Player.deleteMany({});
};

const runseed=async ()=>{
  await clearSeed()
  await seedData()
}

runseed()
