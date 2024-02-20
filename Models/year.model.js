const mongoose = require("mongoose");

const yearSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Year", yearSchema);