const matchBall = require("../models/matchBall")

getlastballdata = async (matchId) => {
    const lastball = await matchBall.find({ matchId: matchId }).sort({ ballSequence: -1 }).limit(1)
    console.log(lastball)
}

getBatsmanRun = async (matchId, playerId) => {
    const batsman = await matchBall.aggregate(
        {
            $match: {
                matchId: matchId,
                onStrikeBatsman: playerId
            }
        },
        {
            $group: {
                _id: "$onStrikeBatsman",
                runs: {
                    $sum: "$batsmanRuns"
                }
            }
        })
    console.log(batsman)
}
