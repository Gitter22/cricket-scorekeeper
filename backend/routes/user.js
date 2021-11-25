const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    console.log("register route hitting")
    if (email && password) {
        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).send({ email: "Enail already exists" })
        } else {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashedpw = await bcrypt.hash(password, salt)
                const newUser = new User({
                    name: name,
                    email: email,
                    password: hashedpw
                })
                await newUser.save()
                res.send(newUser)
            } catch (e) {
                res.status(400).send("Something went wrong!", e)
            }
        }
    } else {
        res.status(400).send("Email or password field is empty")
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(404).send("Email or Password Incorrect")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const payload = {
            id: user.id,
            name: user.name
        }
        const token = jwt.sign(payload, "secret",
            {
                expiresIn: 60 * 60 * 24 * 7
            })
        res.send({ success: true, token: "Bearer " + token })
    } else {
        return res.status(404).send("Email or Password Incorrect")
    }
})

module.exports = router
