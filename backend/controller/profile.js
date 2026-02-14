const User = require("../model/user.js");
const Profile = require("../model/profile.js");
async function handlegetprofile(req, res) {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const body = await Profile.findOne({ createdBy: req.user._id });
        res.status(200).json(body);
        if (!body) {
            return res.status(404).json({ message: "Profile not found" });
        }
    }
    catch (err) {
        res.status(500).json({ "message": "Error fetching profile" });
    }
}
// async function handlepostprofile(req, res) {
//     try {
//         if (!req.user || !req.user._id) {
//             return res.status(401).json({ message: "Unauthorized" });
//         }
//         await Profile.create({
//             username: req.user.username,
//             password: req.user.password,
//             email: req.user.email,
//             createdBy: req.user._id
//         })
//         res.status(200).json({ "message": "Profile created successfully" });
//     }
//     catch (err) {
//         res.status(500).json({ "message": "Error creating profile" });
//     }
// }
async function handlepostprofile(req, res) {
    const profile = await Profile.find()
  try {
    if (profile.some((prof) => prof.createdBy.toString() === req.user._id.toString())) {
      return res.status(409).json({ profile: profile.find((prof) => prof.createdBy.toString() === req.user._id.toString())});
    }
    // Create profile
    await Profile.create({
      username: req.user.username,
      password: req.user.password,
      email: req.user.email,
      createdBy: req.user._id
    });

    return res.status(201).json(profile);
  } catch (err) {
    console.error("handlepostprofile error:", err);
    return res.status(500).json({ message: "Error creating profile" });
  }
}
module.exports = { handlegetprofile, handlepostprofile };