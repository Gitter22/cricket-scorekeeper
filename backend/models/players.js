const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});



module.exports = new mongoose.model("Player", PlayerSchema);
