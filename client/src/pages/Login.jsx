// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/auth';
// import {toast} from "react-toastify";
// export const Login =()=>{
//     const [user,setUser]=useState({
//         email:"",
//         password:"",
//     });
//   const navigate=useNavigate();
//   const {storeToken}=useAuth();
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;

//         setUser({
//             ...user,
//             [name]:value,

//         })
//     }
//       const handleSubmit= async(e)=>{
//         e.preventDefault();
//        try{
//          const response=await fetch(`http://localhost:3000/api/auth/login`,{
//           method:"POST",
//           headers:{
//             "Content-Type":"application/json",
//           },
//           body:JSON.stringify(user),
//          });
//          console.log("login form",response);

//          const resData= await response.json();
//        //  console.log("res from server",resData);
//          if(response.ok){

//           toast.success("login succesfully");
         
//           storeToken(resData.token);
//          // localStorage.setItem("token",resData.token);

//           setUser({email:"",password:""});
//           navigate("/");
//          }
//          else{
//           toast.error(
//             resData.extraDetails ? resData.extraDetails:resData.message);
//          }
//        }
//        catch(error){
//         console.log(error);
//        }
//       }
//     return (
//          <>
//     <section>
//      <main className="box">
//  <form onSubmit={handleSubmit}>
   
//      <div className="inputBox">
//        <label htmlFor="email">email</label>
//        <input
//          type="email"
//          name="email"
//          id="email"
//          placeholder="type your email"
//          required
//          autoComplete="off"
//          value={user.email}
//          onChange={handleInput}
//        />
//      </div>
    
//      <div className="inputBox">
//        <label htmlFor="password">Password</label>
//        <input
//          type="password"
//          name="password"
//          id="password"
//          placeholder="type your password"
//          required
//          autoComplete="off"
//          value={user.password}
//          onChange={handleInput}
//        />
//      </div>
   
//      <button type="submit" style={{ float: 'left' }}>Submit</button>
//  </form>
//      </main>
//     </section>
//      </>
//      )
// }


import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { useFormik } from 'formik';
import{ loginSchema }from "../schemas/validationRoute.js";
import {toast} from "react-toastify";
const URL="http://localhost:3000/api/auth/login";
const initialValues={
 
  email:"",

  password:"",
  
}
export const Login =()=>{
  const{values,errors,touched, handleBlur,handleChange} =useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
   
    }
  })
  const navigate=useNavigate();
  const {storeToken}=useAuth();

      const handleSubmit= async(e)=>{
        e.preventDefault();
        if ( errors.email ||errors.password) {
  
          return; 
        }
       try{
         const response=await fetch(URL,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(values),
         });
        

         const resData= await response.json();
       //  console.log("res from server",resData);
         if(response.ok){
           console.log(resData);
          toast.success("login succesfully");
         
          storeToken(resData.token);
         // localStorage.setItem("token",resData.token);

         
          navigate("/");
         }
         else{
          toast.error(
            resData.extraDetails ? resData.extraDetails:resData.message);
         }
       }
       catch(error){
        console.log(error);
       }
      }
      const renderValidationIcon = (fieldName) => {
        if (values[fieldName] !== '') {
          if (errors[fieldName]) {
            
            return (
              <span className="validation-icon error">
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
            );
          } else {
         
            return (
              <span className="validation-icon success">
                <i className="fa-solid fa-circle-check"></i>
              </span>
            );
          }
        }
        return null;
      };
      
    return (
         <>
    <section>
     <main className="box">
 <form onSubmit={handleSubmit}>
   
     <div className="inputBox">
       <label htmlFor="email">email</label>
       {renderValidationIcon("email")}
       <input
         type="email"
         name="email"
         id="email"
         placeholder="type your email"
         required
         autoComplete="off"
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
         error={errors.email}
        touched={touched.email}
        style={{
          borderBottom: `${values.email === '' ? '1px solid #ccc' : (errors.email? '1px solid red' : '1px solid #09c372')}`,
        }}
       />
        {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}
     </div>
    
     <div className="inputBox">
       <label htmlFor="password">Password</label>
       {renderValidationIcon("password")}
       <input
         type="password"
         name="password"
         id="password"
         placeholder="type your password"
         required
         autoComplete="off"
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         error={errors.password}
         touched={touched.password}
         style={{
           borderBottom: `${values.password === '' ? '1px solid #ccc' : (errors.password ? '1px solid red' : '1px solid #09c372')}`,
         }}
       />
        {errors.password && touched.password ?<p className="form-error">{errors.password}</p>:null}
     </div>
   
     <button type="submit" style={{ float: 'left' }}>Submit</button>
 </form>
     </main>
    </section>
     </>
     )
}