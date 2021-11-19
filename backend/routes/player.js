const express = require('express')
const router = express.Router({ mergeParams: true })
const Player = require('../models/players')

router.get('/', async (req, res) => {
    let page = Number(req.query.page)
    const totalPlayers = await Player.find({}).count()
    const totalPages = Math.ceil(totalPlayers / 10)
    console.log(totalPages)
    const players = await Player.find({}).skip((page - 1) * 10).limit(10)
    res.send({ players: players, totalPages })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const data = req.body
    const player = await new Player(data)
    await player.save()
    res.json('Data added')
})

module.exports = router