const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const matchRoutes = require('./routes/match')
const playerRoutes = require('./routes/player')
const matchBallRoutes = require('./routes/matchBall')

const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/cricketscorekeeper')
    .then(() => {
        console.log("database connection successful")
    })
    .catch((e) => {
        console.log("Something went wrong with the database", e)
    })

app.use('/matches', matchRoutes)
app.use('/players', playerRoutes)
app.use('/matchballs', matchBallRoutes)

app.listen(3001, (req, res) => {
    console.log("App listening on port 3001")
})