const mongoose = require("mongoose");

const permitSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true  
    },
    permit: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Permit', permitSchema);