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
    console.log(matches)
    res.send(matches)
})

router.post('/', async (req, res) => {
    const { location, team1, team2 } = req.body
    console.log(team1, team2)
    const match = await new Match({ location })
    const insertedTeams = await Team.insertMany([{
        ...team1,
        matchId: match._id
    }, {
        ...team2,
        matchId: match._id
    }])
    match.team1 = insertedTeams[0]._id;
    match.team2 = insertedTeams[1]._id;
    await match.save()
    console.log(insertedTeams, match)
    res.send(insertedTeams)
})

// app.get('/matches/new',(req,res)=>{
//     res.send("new match")
// })

// app.post('/matches',(req,res)=>{
// const data=req.body
// const match=new Match({data})
// res.send('post request')
// })

// app.get('/match/:matchid', (req,res)=>{

// })

// app.patch('/match/:matchid',(req,res)=>{

// })

module.exports = router