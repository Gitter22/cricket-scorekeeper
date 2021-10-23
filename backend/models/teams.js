const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});



module.exports = new mongoose.model("Team", TeamSchema);