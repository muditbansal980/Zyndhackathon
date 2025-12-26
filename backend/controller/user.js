
const User = require("../model/user.js");
const { v4: uuidv4 } = require('uuid');
const { setUser } = require("../services/auth.js")

//<------------------------Signup Handler-------------------->
async function handlesignup(req, res) {
    const body = req.body;
    const user = await User.find()
    try {
        if (user.some((user) => user.username !== body.username || user.email !== body.email)) {
            await User.create({
                username: body.username,
                password: body.password,
                email: body.email,
                role: body.role,
                college: body.college,
                income: body.income
            })
            res.status(200).json({ "message": "Signup successful" });
        }
        else if (user.some((user) => user.username === body.username || user.email === body.email)) {
            res.status(401).json({ "message": "User already exist" });
        }
    }
    catch (error) {
        res.json({ "message": "Error in login", error });
    }
}
async function handlelogin(req, res) {
    try {
        const { password, username, email } = req.body;

        // 1️⃣ Check empty fields FIRST
        if (!password || !username || !email) {
            return res.status(400).json({ "message": "Please fill all the fields" });
        }

        // 2️⃣ Find user
        const user = await User.findOne({ username, email, password });

        // 3️⃣ User not found
        if (!user) {
            return res.status(401).json({ "message": "User does not exist" });
        }
        // 5️⃣ Success
        const sessionId = uuidv4();
        console.log("Session ID:", sessionId);
        setUser(sessionId, user);
         res.cookie("uid", sessionId,{
            httpOnly: true,
            secure:true,
            sameSite:"none",
            domain:".onrender.com"  // Adjust domain as needed
    });
        return res.status(200).json({ "message": "Login successful" });

    } catch (error) {
        return res.status(500).json({ "message": "Server error" });
    }
}


module.exports = { handlesignup, handlelogin };