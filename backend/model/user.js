const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    }

});

const User = mongoose.model("user", userSchema);

module.exports = User;