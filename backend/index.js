require("dotenv").config();
const express = require('express');
const cors = require("cors")
const { connectiondb } = require("./connection.js");
const app = express();
const userouter=require("./routes/user.js")
const profilerouter =require("./routes/profile.js")
const cookieParser = require("cookie-parser");
const {authmiddleware} = require("./middleware/auth.js");
app.use(cookieParser());;
//middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: ["https://zyndhackathon.vercel.app","http://localhost:3000"],
  credentials: true
}));

//<------------------------Connection of mongoose-------------------->
connectiondb(process.env.MONGO_URL).then(()=>console.log("MONGODB CONENCTED")).catch((err) => console.log("Mongoose Connection Failed", err))


//<----------------_Routes----------------->
app.use("/user",userouter)
app.use("/userprofile",authmiddleware,profilerouter)


app.listen(9005, () => {
    console.log("http://localhost:9005")
})