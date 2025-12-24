const express= require("express");
const router = express.Router();
const {handlegetprofile,handlepostprofile}=require("../controller/profile.js")
router.get("/profile",handlegetprofile);
router.post("/profile",handlepostprofile);
module.exports=router;