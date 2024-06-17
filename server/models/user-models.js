const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

});
userSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
 // //hash the password
      const saltRound=await bcrypt.genSalt(10);
      const hashPassword=await bcrypt.hash(user.password,saltRound);
      user.password=hashPassword;
    }
    catch(error){
        next(error);
    }
})
userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateToken= async function(){
   try{
return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
},
process.env.JWT_key,
{
    expiresIn:"5d",
}
)
   }catch(error){
    console.log(error);
   }
}
const User = new mongoose.model("User",userSchema);

module.exports=User;