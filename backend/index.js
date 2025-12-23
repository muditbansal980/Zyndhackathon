require("dotenv").config();
const express = require('express');
const cors = require("cors")
const { connectiondb } = require("./connection.js");
const app = express();
const userouter=require("./routes/user.js")

//middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//<------------------------Connection of mongoose-------------------->
connectiondb(process.env.MONGO_URL).then(()=>console.log("MONGODB CONENCTED")).catch((err) => console.log("Mongoose Connection Failed", err))


//<----------------_Routes----------------->
app.use("/user",userouter)



app.listen(9005, () => {
    console.log("http://localhost:9005")
})