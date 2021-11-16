const matchBall = require("../models/matchBall")
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/cricketscorekeeper", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database connection successul");
    })
    .catch((e) => {
        console.log("Something went wrong with the database", e);
    });

getlastballdata = async (matchId) => {
    const lastball = await matchBall.findOne({ matchId: matchId }).sort({ ballSequence: -1 }).limit(1)
    // console.log(lastball)
    return lastball
}

getBatsmanStats = async (matchId, playerId) => {

    let batsman = await matchBall.aggregate([{
        $match: {
            matchId: mongoose.Types.ObjectId(matchId),
            onStrikeBatsman: mongoose.Types.ObjectId(playerId)
        }
    },
    {
        $group:
        {
            _id: "$onStrikeBatsman",
            runs: {
                $sum: "$batsmanRuns"
            },
            balls: {
                $sum: 1
            }
        }

    }
    ])
    // console.log(batsman)
    return batsman
}

const getScoreCard = async (matchId) => {
    let matchballs = await matchBall.find({ matchId: matchId })
    let scoreCard = {
        team1: {
            runs: 0,
            balls: "",
            wickets: 0
        },
        team2: {
            runs: 0,
            balls: "",
            wickets: 0
        }
    }
    for (let ball of matchballs) {
        if (ball.innings === 1) {
            scoreCard.team1.runs += ball.teamRuns
            if (ball.dismissalType !== "None") {
                scoreCard.team1.wickets++
            }
        }
        if (ball.innings === 2) {
            scoreCard.team2.runs += ball.teamRuns
            if (ball.dismissalType !== "None") {
                scoreCard.team2.wickets++
            }
        }
    }
    let data1 = await matchBall.findOne({ matchId: matchId, innings: 1 }).sort({ ballSequence: -1 }).limit(1)
    scoreCard.team1.balls = `${data1.overNumber}.${data1.ballNumber}`
    let data2 = await matchBall.findOne({ matchId: matchId, innings: 2 }).sort({ ballSequence: -1 }).limit(1)
    scoreCard.team2.balls = `${data2.overNumber}.${data2.ballNumber}`
    // console.log(scoreCard)
    return scoreCard
}





const getExtras = async (matchId) => {
    let matchballs = await matchBall.find({ matchId: matchId, ballType: { $ne: "Legal" } })
    let innings1 = {
        noBall: 0,
        wide: 0,
        bye: 0
    }
    let innings2 = {
        noBall: 0,
        wide: 0,
        bye: 0
    }

    for (ball of matchballs) {
        if (ball.innings === 1) {
            innings1.noBall += ball.noBallRuns
            innings1.wide += ball.wideRuns
            innings1.bye += ball.byeRuns
        }
        if (ball.innings === 2) {
            innings2.noBall += ball.noBallRuns
            innings2.wide += ball.wideRuns
            innings2.bye += ball.byeRuns
        }
    }

    let extras = {
        innings1,
        innings2
    }
    // console.log(extras, "extras")
    return extras
}

const getBowlerStats = async (matchId, playerId) => {
    let bowler = {
        overs: "",
        wickets: 0,
        runs: 0
    }
    let balls = 0
    let matchballs = await matchBall.find({ matchId: matchId, bowler: playerId })
    for (ball of matchballs) {
        if (ball.dismissalType !== "None" && ball.dismissalType !== "Run Out") {
            bowler.wickets++
        }
        bowler.runs += ball.bowlerRuns
        if (ball.noBallRuns === 0 && ball.wideRuns == 0) {
            balls++
        }
    }
    let ballNumber = balls % 6
    let overNumber = Math.floor(balls / 6)
    bowler.overs = `${overNumber}.${ballNumber}`
    // console.log(bowler)
    return bowler
}





// getBatsmanStats("618a943227f544b331487b13", "6174df946b22c0ffc51e3b2a")
// getlastballdata("618a943227f544b331487b13")
// getExtras("618a943227f544b331487b13")
// getScoreCard('618a943227f544b331487b1a')
// getBowlerStats("618a943227f544b331487b05", "61893c9d0b07d330c52d57f1")