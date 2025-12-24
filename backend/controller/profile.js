const User = require("../model/user.js");
const Profile = require("../model/profile.js");
async function handlegetprofile(req, res) {
    try{
        const body = await Profile.findOne({createdBy:req.user.id});
        res.status(200).json(body);
    }
    catch(err){
        res.status(500).json({ "message": "Error fetching profile" });
    }
}
async function handlepostprofile(req, res) {
    try{
        await Profile.create({
            username: req.user.username,
            password: req.user.password,
            email: req.user.email,
            createdBy:req.user._id
        })
        res.status(200).json({ "message": "Profile created successfully" });
    }
    catch(err){
        res.status(500).json({ "message": "Error creating profile" });
    }
}
module.exports= {handlegetprofile,handlepostprofile};