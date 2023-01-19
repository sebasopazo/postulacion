const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Client', clientSchema);