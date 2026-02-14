const express = require("express");
const {handlesignup,handlelogin} = require("../controller/user.js")
const router = express.Router();
router.post("/signup", handlesignup);
router.post("/login", handlelogin);
module.exports = router;