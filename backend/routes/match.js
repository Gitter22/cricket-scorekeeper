const express = require('express')
const router = express.Router({ mergeParams: true })
const Match = require('../models/matches')
const Team = require('../models/teams')
const Players = require('../models/players')


router.get('/', async (req, res) => {
    const matches = await Match.find({}).populate({
        path: 'team1',
        populate: { path: 'players' }
    })
        .populate({
            path: 'team2',
            populate: { path: 'players' }
        })
    res.send(matches)
})

router.post('/new', async (req, res) => {
    const { location, team1, team2, status } = req.body
    const match = await new Match({ location, status })
    const insertedTeams = await Team.insertMany([{
        ...team1,
        matchId: match._id
    }, {
        ...team2,
        matchId: match._id
    }])
    match.team1 = insertedTeams[0]._id;
    match.team2 = insertedTeams[1]._id;
    const insertedMatch = await match.save()
    res.send(insertedMatch)
})


router.get('/:id', async (req, res) => {
    const match = await Match.findById(req.params.id).populate({
        path: 'team1',
        populate: { path: 'players' }
    })
        .populate({
            path: 'team2',
            populate: { path: 'players' }
        })
    res.send(match)
})

// app.patch('/match/:matchid',(req,res)=>{

// })

module.exports = router