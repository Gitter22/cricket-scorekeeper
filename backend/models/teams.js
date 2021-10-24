const mongoose = require("mongoose");
const Schema = mongoose.Schema
const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player',
    }],
    matchId: {
        type: Schema.Types.ObjectId,
        ref: 'Match',
    }
});



module.exports = new mongoose.model("Team", TeamSchema);