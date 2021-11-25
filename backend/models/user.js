const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = User = mongoose.model("User", userSchema)
