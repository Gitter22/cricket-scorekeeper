const mongoose = require("mongoose");
const Match = require('./match')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});



module.exports = new mongoose.model("Player", PlayerSchema);
