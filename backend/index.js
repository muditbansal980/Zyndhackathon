require("dotenv").config();
const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');

const app = express()

//middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//Connection of mongoose
mongoose
    // .connect("mongodb://127.0.0.1:27017/database-name-zynd-hack")
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongoose Connected"))
    .catch((err) => console.log("Mongoose Connection Failed", err))

// Schema
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


//Model 
const User = mongoose.model("user", userSchema)

//Routes
app.post("/signup", async (req, res) => {
    try {
        const body = req.body;

        // Validation
        if (!body.username || !body.password || !body.email || !body.role || !body.college || !body.income) {
            return res.status(400).json({ "Error": "All fields are required" });
        }

        // Create user
        else {
            await User.create({
                username: body.username,
                password: body.password,
                email: body.email,
                role: body.role,
                college: body.college,
                income: body.income
            });

            return res.status(201).json({ "Entry": "Registered" });
        }

    } catch (err) {
        console.error("❌ Signup Error:", err);

        // Handle duplicate username/email
        if (err.code === 11000) {
            return res.status(401).json({
                "Error": "Username or email already exists"
            });
        }

        // Handle other errors
        return res.status(500).json({
            "Error": "Registration failed",
            "Details": err.message
        });
    }
});

app.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.find()
    try {
        if (user.some((user) =>  user.username === body.username || user.email === body.email )) {
            res.status(200).send("Login successful")
        }
        else if (user.some((user) => user.username !== body.username || user.email !== body.email)) {
            res.status(401).send("User does not exist")
        }
    }
    catch(error){
        res.send("Error in login",error)
    }
})



app.listen(9005, () => {
    console.log("http://localhost:9005")
})