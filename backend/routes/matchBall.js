const express = require('express')
const router = express.Router({ mergeParams: true })
const MatchBall = require('../models/matchBall')

router.get('/', async (req, res) => {
    const matchBall = await MatchBall.find({})
    res.send(matchBall)
})

router.post('/', async (req, res) => {
    const { matchId, innings, ballType, byeType, runType, dismissalType, didPlayersCross, onStrikeBatsman, nonStrikeBatsman, bowler, overNumber, ballNumber, } = req.body
    let runs = typeARuns(runType)
    console.log(req.body.matchId)
    let matchBall = {
        matchId,
        innings,
        ballSequence: 1,
        noBallRuns: ballType === "No Ball" ? 1 : 0,
        wideRuns: ballType === "Wide" ? runs + 1 : 0,
        byeRuns: byeType === "Bye" ? runs : 0,
        dismissalType,
        didPlayersCross,
        onStrikeBatsman,
        nonStrikeBatsman,
        bowler,
        overNumber,
        ballNumber,
        batsmanRuns: ballType === "Wide" ? 0 : byeType === "Bye" ? 0 : runs
    }
    matchBall.bowlerRuns = ballType === "No Ball" ? matchBall.noBallRuns : ballType === "Wide" ? matchBall.wideRuns : matchBall.batsmanRuns,
        matchBall.teamRuns = matchBall.bowlerRuns + matchBall.byeRuns
    console.log(matchBall)
    const data = await new MatchBall(matchBall)
    await data.save()
    res.send('Data added')
})

router.get('/:matchId/lastmatchball', async (req, res) => {
    const matchball = await MatchBall.find({})
    res.send(matchball)

})

const typeARuns = (runEvent) => {
    let typeARuns = 0
    switch (runEvent) {
        case "No Runs":
            typeARuns = 0
            break;
        case "Single":
            typeARuns = 1
            break;
        case "Double":
            typeARuns = 2
            break;
        case "Three Runs":
            typeARuns = 3
            break;
        case "Boundary":
            typeARuns = 4
            break;
        case "Five Runs":
            typeARuns = 5
            break;
        case "Six":
            typeARuns = 6
            break;
        default:
            0
            break;
    }
    return typeARuns
}



module.exports = router