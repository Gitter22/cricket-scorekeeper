const express = require('express')
const router = express.Router({ mergeParams: true })
const Player = require('../models/players')

router.get('/', async (req, res) => {
    const players = await Player.find({})
    res.send(players)
})

router.post('/', async (req, res) => {
    const data = req.body
    const player = await new Player(data)
    await player.save()
    res.send('Data added')
})

module.exports = router