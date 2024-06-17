const {z}= require("zod");


const loginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3,{message:"email is at least 3 character"})
    .max(50,{message:"email is at max 50 character"}),
    password:z
    .string({required_error:"password is required"})
 
    .min(3,{message:"password is at least 3 character"})
    .max(250,{message:"password is at max 250 character"}),

})
const signupSchema=loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name is at least 3 character"})
    .max(50,{message:"Name is at max 50 character"}),
  
    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone is at least 10 digit"})
    .max(20,{message:"phone is at max 50 digit"}),
   
});
module.exports={signupSchema,loginSchema};