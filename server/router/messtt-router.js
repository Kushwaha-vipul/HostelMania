const express= require('express');

const router=express.Router();
const messTT=require("../controllers/messTT-controller");
router.route("/mess").get(messTT);
module.exports=router;