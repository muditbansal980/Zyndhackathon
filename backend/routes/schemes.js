const express= require("express");
const router = express.Router();
const {handlebenefits}=require("../controller/schmes.js")
router.get("/schemes",handlebenefits);
module.exports=router;