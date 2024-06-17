const jwt =require("jsonwebtoken");
const User= require("../models/user-models");
const authMiddleware=  async (req,res,next)=>{
 const token=req.header("Authorization");

 if(!token){
    return res.status(401).json({message:"token does not exist"});
 }
 const jwtToken=token.replace("Bearer","").trim();
 

 try{
    const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY);
    
    const userData = await User.findOne({email:isVerified.email}).
    select({
        password:0,
    });
    console.log(userData);
    req.token=token;
    req.user=userData;
    
    req.userID=userData._id;
    next();
 }catch(error){
    return res.status(401).json({message:"Invalid Token"});
 }
 
}
module.exports = authMiddleware;