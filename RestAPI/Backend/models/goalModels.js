const mongoose = require('mongoose');

const goalShcema = mongoose.Schema({
    text: {
        type: String,
        required: [true,'Please add a text Value']
    },
} , {
    timestamps: true
})

module.exports = mongoose.model('Goal',goalShcema);