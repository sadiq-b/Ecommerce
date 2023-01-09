const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    address:
    {

        type: String,
    },

    role: {

        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },

    password: {

        type: String
    }

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('user', userSchema)