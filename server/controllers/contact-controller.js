const Contact = require("../models/contact-model");

const contactForm= async (req,res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"Hey Mohan,message send successfully!"});
    }catch(error){
        return res.status(501).json({message:"Oops Mohan,message is not send!"})
    }
};
module.exports=contactForm;
