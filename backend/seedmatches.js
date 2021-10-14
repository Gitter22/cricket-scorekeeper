const mongoose = require('mongoose')
const Match = require('./models/match')

mongoose.connect('mongodb://localhost:27017/cricketscorekeeper')
    .then(() => {
        console.log("database connection successul")
    })
    .catch((e) => {
        console.log("Something went wrong with the database", e)
    })

const matchseed = [
]

const seedData = async () => {
    const matches = await Match.insertMany(matchseed)
    console.log(matches)
}

const clearSeed = async () => {
    await Match.deleteMany({});
};

const runseed = async () => {
    await clearSeed()
    await seedData()
}

runseed()