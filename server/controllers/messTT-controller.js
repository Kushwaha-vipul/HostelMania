const MessTT =require("../models/messTT-model");

const messTimeTable=async (req,res)=>{
    try{
       const responseTT=await MessTT.find();
       if(!responseTT){
        res.status(401).json({message:"error found in mess timetable"});
        return;
       }
       res.status(201).json({message:responseTT});

    }
    catch(err){
        console.error(err);
        res.status(500).send('Error fetching timetable');     
    }
};
module.exports=messTimeTable;
