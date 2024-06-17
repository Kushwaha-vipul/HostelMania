// const Service=require("../models/service-model");
// const services=async(req,res)=>{
//     try{
//           const response=await Service.find();
//           if(!response){
//             res.status(400).json({msg:"No service data available"});
//             return;
//           }
//           res.status(200).json({msg:response});
//     }
//     catch(err){
//         console.log(`service page show :${err}`);
//     }
// }
// module.exports=services;
const User=require("../models/user-models");
const Service=require("../models/service-model");
const services=async(req,res)=>{
    try{
          const{service,availability,worker,location,description,username,submittedOn}=req.body;
          if (!service|| !availability || !worker || !location || !description || !username||!submittedOn) {
            return res.status(400).json({ message: 'Missing required fields in request body' });
          }
          const userExist=await User.findOne({username});
          if(!userExist){
            return res.status(400).json({message:"Incorect username"});
           }
           const newComplaint = new Service({
            worker,
            username,
            service,
            location,
            availability,
        
            description,
            submittedOn,
          });
          
          const savedComplaint = await newComplaint.save();
         return res.status(200).json({
          message:"Complaint submited successfully",

        });
          }
        
    
    catch(err){
       return res.status(401).json({message:"complaint did not sent"});
    }
}
module.exports=services;