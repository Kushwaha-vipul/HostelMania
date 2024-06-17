const User=require("../models/user-models");
const bcrypt=require("bcryptjs");
const home=async (req,res)=>{
   try{
  res.status(200).send("welcome Mohan");
   }catch(error){
       console.log(error);
   }
}
const register=async(req,res)=>{
   try{ 
   const {username,email,phone,password}=req.body;
      const userExist = await User.findOne({email});
      if(userExist){
        return res.status(400).json({message:"email is already exist"});
      }
      // //hash the password
      // const saltRound=10;
      // const hashPassword=await bcrypt.hash(password,saltRound);

                 const userCreated=  await User.create({
                  username,
                  email,
                  phone,
                  password
                });

    res.status(200).json({
      message:userCreated, 
      token:await userCreated.generateToken(),
       userId:userCreated._id.toString(),
    });
}
catch(error){

 next(error);
}
};
  const login = async (req,res)=>{
    try{
       const {email,password}=req.body;
       const userExist = await User.findOne({email});
       if(!userExist){
        return res.status(400).json({message:"Invalid data"});

       }
      // const user =await bcrypt.compare(password,userExist.password);
      const user = await userExist.comparePassword(password);
       if(user){
        res.status(200).json({
          msg:"Mohan said : login successfull",
          token:await userExist.generateToken(),
          userId:userExist._id.toString(),
        })
       }
       else{
           res.status(500).json({message:"Mohan,invalid email or password"});
       }
    }
    catch(error){
      res.status(500).json("hey,Mohan ,server error");
    }
  } 
  //to send the data of students login 

  const user=async (req,res)=>{
    try{
      const userData=req.user;
          console.log(userData);
          res.status(200).json({userData});
    }
    catch(error){
      console.log(`error from user path ${error}`);
    }
  }
module.exports={home,register,login, user};