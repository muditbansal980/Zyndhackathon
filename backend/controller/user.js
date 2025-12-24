
const User = require("../model/user.js");
const Login = require("../model/login.js");

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
            res.status(200).send("Signup successful")
        }
        else if (user.some((user) => user.username === body.username || user.email === body.email)) {
            res.status(401).send("User already exist")
        }
    }
    catch (error) {
        res.send("Error in login", error)
    }
}
async function handlelogin(req, res) {
    try {
        const { password, username, email } = req.body;

        // 1️⃣ Check empty fields FIRST
        if (!password || !username || !email) {
            return res.status(400).send("Please fill all the fields");
        }

        // 2️⃣ Find user
        const user = await User.findOne({ username, email });

        // 3️⃣ User not found
        if (!user) {
            return res.status(401).send("User does not exist");
        }

        // 4️⃣ Password check (IMPORTANT)
        if (user.password !== password) {
            return res.status(401).send("Invalid credentials");
        }

        // 5️⃣ Success
        await Login.create({
            username: username,
            password: password,
            email: email,
        });
        return res.status(200).send("Login successful");

    } catch (error) {
        return res.status(500).send("Server error");
    }
}


module.exports = { handlesignup, handlelogin };