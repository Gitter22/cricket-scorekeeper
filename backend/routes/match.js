const express = require('express')
const router = express.Router({ mergeParams: true })
const Match = require('../models/matches')

router.get('/', async (req, res) => {
    const matches = await Match.find({})
    res.send(matches)
})

router.post('/', async (req, res) => {
    const data = req.body
    const match = await new Match(data)
    await match.save()
    res.send('Data added')
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