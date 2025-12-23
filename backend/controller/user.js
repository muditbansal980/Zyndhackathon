
const User = require("../model/user.js");


//<------------------------Signup Handler-------------------->
async function handlesignup(req, res) {
    const body = req.body;
    const user = await User.find()
    try {
        if (user.some((user) => user.username === body.username || user.email === body.email)) {
            res.status(200).send("Login successful")
        }
        else if (user.some((user) => user.username !== body.username || user.email !== body.email)) {
            res.status(401).send("User does not exist")
        }
    }
    catch (error) {
        res.send("Error in login", error)
    }
}
async function handlelogin(req, res) {
    const body = req.body;
    const user = await User.find()
    try {
        if (user.some((user) => user.username === body.username || user.email === body.email)) {
            res.status(200).send("Login successful")
        }
        else if (user.some((user) => user.username !== body.username || user.email !== body.email)) {
            res.status(401).send("User does not exist")
        }
    }
    catch (error) {

    }
}

    module.exports = { handlesignup, handlelogin };