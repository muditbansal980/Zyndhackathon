// require("dotenv").config();
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
    .connect("mongodb://127.0.0.1:27017/database-name-zynd-hack")
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
// Routes
// app.post("/signup", async (req, res) => {
//   try {
//     const body = req.body;
//     console.log(body);

//     // Validation
//     if (!body.username || !body.password || !body.email || !body.role || !body.college || !body.income) {
//       return res.status(400).json({ "Error": "All fields are required" });
//     }

//     // Create user
//     await User.create({
//       username: body.username,
//       password: body.password,
//       email: body.email,
//       role: body.role,
//       college: body.college,
//       income: body.income
//     });

//     return res.status(201).json({ "Entry": "Registered" });

//   } catch (err) {
//     console.error("Signup error:", err);
    
//     // Handle duplicate key error (username or email already exists)
//     if (err.code === 11000) {
//       return res.status(400).json({ 
//         "Error": "Username or email already exists" 
//       });
//     }
    
//     // Handle other errors
//     return res.status(500).json({ 
//       "Error": "Internal server error",
//       "Details": err.message 
//     });
//   }
// });
// const express = require('express');
// const cors = require("cors");
// const mongoose = require('mongoose');
// const app = express();

// // Middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// // Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/database-name-zynd-hack")
//   .then(() => console.log("✅ Mongoose Connected"))
//   .catch((err) => console.log("❌ Mongoose Connection Failed", err));

// // Schema
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   role: { type: String, required: true },
//   college: { type: String, required: true },
//   income: { type: String, required: true }
// });

// // Model
// const User = mongoose.model("user", userSchema);

// // Routes
// app.get("/test", (req, res) => {
//   res.json({ message: "Server is working!" });
// });
// app.post("/signup", async (req, res) => {
//   console.log("📥 Request received");
//   console.log("Headers:", req.headers);
//   console.log("Body:", req.body);

//   try {
//     const body = req.body;

//     if (!body.username || !body.password || !body.email || !body.role || !body.college || !body.income) {
//       console.log("❌ Validation failed");
//       return res.status(400).json({ "Error": "All fields are required" });
//     }

//     console.log("✅ Validation passed, creating user...");

//     const user = await User.create({
//       username: body.username,
//       password: body.password,
//       email: body.email,
//       role: body.role,
//       college: body.college,
//       income: body.income
//     });

//     console.log("✅ User created:", user._id);
//     return res.status(201).json({ "Entry": "Registered" });

//   } catch (err) {
//     console.error("❌ Error:", err);

//     if (err.code === 11000) {
//       return res.status(400).json({ "Error": "Username or email already exists" });
//     }

//     return res.status(500).json({ 
//       "Error": "Server error",
//       "Details": err.message 
//     });
//   }
// });

// app.listen(9000, () => {
//   console.log("🚀 Server running on http://localhost:9000");
// });
