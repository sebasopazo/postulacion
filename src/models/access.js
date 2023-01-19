const mongoose = require("mongoose");

const accessSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Access', accessSchema);