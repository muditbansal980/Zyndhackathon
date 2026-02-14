const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        ref:"User"
    },
    password: {
        type: String,
        required: true,
        ref:"User"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        ref:"User"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});

const Profile = mongoose.model("Profile", userSchema);

module.exports = Profile;