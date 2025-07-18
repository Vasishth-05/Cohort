const mongoose = require('mongoose');

const goalShcema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },

    text: {
        type: String,
        required: [true,'Please add a text Value']
    },
    
} , {
    timestamps: true
})

module.exports = mongoose.model('Goal',goalShcema);