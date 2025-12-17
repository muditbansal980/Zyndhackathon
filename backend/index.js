require("dotenv").config();
const express = require('express');
const cors = require ("cors")
const mongoose = require('mongoose');

const app = express()

//middle wares
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());


//Connection of mongoose
mongoose
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
        type:String,
        required:true
    },
    income: {
        type:String,
        required:true
    }

});


//Model 
const User = mongoose.model("user", userSchema)

//Routes
app.post("/signup",async (req,res)=>{
    const body = req.body
    console.log(body)
    // console.log('signup request body:', req.body)
    if (!body.username || !body.password || !body.email || !body.role || !body.college || !body.income || !body){
        return res.status(400).json({"Error":"All fields are required"})
    }
    await User.create({
        username:body.username,
        password:body.password,
        email:body.email,
        role:body.role,
        college:body.college,
        income:body.income 
    })
    return res.status(201).json({"Entry":"Registered"})
})
app.listen(9000, () => {
    console.log("http://localhost:9000")
})