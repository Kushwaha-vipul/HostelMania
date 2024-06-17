const User = require("../models/user-models");
const Contact = require("../models/contact-model");
// To Get All Users Code////////////////////
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
//user update details code from admin panel
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
//user delete code from admin panel
const deleteUserById = async (req, res,next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted SuccessFully" });
  } catch (err) {
    next(err);
  }
};
//user update logic
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (err) {
    next(err);
  }
};

// to Get All Contact Code////////////////////
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};


//use contact delete code 
const deleteContactById=async (req,res,next)=>{
  try{
         const id=req.params.id;
         await Contact.deleteOne({_id:id});
         return res.status(200).json({message:"Contact Deleted SuccessFully"});
  
  }
  catch(error){
    next(error);
  }
  }
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
