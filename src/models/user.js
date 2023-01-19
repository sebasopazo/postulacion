const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = mongoose.Schema({
    userId: {
        type: Number
    },  
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
});
userSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'userId'});
module.exports = mongoose.model('User', userSchema);