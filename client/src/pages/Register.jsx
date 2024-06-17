// import { useState } from 'react';
// import {useNavigate} from "react-router-dom"
// import { useAuth } from '../store/auth';
// import{ signupSchema }from "../schemas/validationRoute.jsx";
// import {toast} from "react-toastify";


// export const Register =()=>{

//     const [user,setUser]=useState({
//         username:"",
//         email:"",
//         phone:"",
//         password:"",
       

//     });

//     const navigate=useNavigate();
//     const {storeToken}=useAuth();
//      const handleInput=(e)=>{
//         console.log(e);
//         let name=e.target.name;
//         let value=e.target.value;
//         setUser({
//             //spread opertor for preserving the rest data,only updated data is changed
//             ...user,
//             //it nessary to make dunamic [],otherwise value is not changed
//             [name]:value,

//         })
//      }


//      const handleSubmit =async(e)=>{
//             e.preventDefault();
//             console.log(user);
//             try{
//             const response=await fetch(`http://localhost:3000/api/auth/register`,{
//               method:"POST",
//               headers:{
//                 "Content-Type":"application/json",
//               },
//               body:JSON.stringify(user),
//             });
//            // console.log(response);
//             const resData=await response.json();
//             console.log("res from server",resData.extraDetails);
//             if(response.ok){
             
//               //store token in local storage 
//               storeToken(resData.token);
//              // localStorage.setItem("token",resData.token);
//               setUser({username:"",
//               email:"",
//               phone:"",
//               password:"",
//             })
//             toast.success("Registration successful");
//             navigate("/");
//             }
//             else{
//               toast.error(resData.extraDetails ? resData.extraDetails:resData.message);
//             }
           
//           }
//           catch(error){
//             console.log("register",error);
//           }
//      }
//    return (
//     <>
//    <section>
//     <main className="box">
{/* <form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="username">username</label>
    <input
    type="text"
    name="username"
    placeholder="username"
    id="username"
    required
    autoComplete="off"
    value={user.username}
    onChange={handleInput}
   />
    </div>
    <div className="inputBox">
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="type your email"
        required
        autoComplete="off"
        value={user.email}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="phone">Phone</label>
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={user.phone}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="type your password"
        required
        autoComplete="off"
        value={user.password}
        onChange={handleInput}
      />
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Submit</button>
</form> */}
//     </main>
//    </section>
//     </>
//    )
// }



import {useNavigate} from "react-router-dom"
import { useFormik } from 'formik';
import { useAuth } from '../store/auth';
import{ signupSchema }from "../schemas/validationRoute.js";
import {toast} from "react-toastify";

const URL="http://localhost:3000/api/auth/register";
const initialValues={
  username:"",
  email:"",
  phone:"",
  password:"",
  
}
export const Register =()=>{

  const{values,errors,touched,handleBlur,handleChange} =useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values)=>{
   
    }
  })

    const navigate=useNavigate();
    const {storeToken}=useAuth();
    


     const handleSubmit =async(e)=>{
            e.preventDefault();
            if (errors.username || errors.email || errors.phone || errors.password) {
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
           // console.log(response);
            const resData=await response.json();
            
            if(response.ok){
             
              //store token in local storage 
              storeToken(resData.token);
             // localStorage.setItem("token",resData.token);
             
            toast.success("Registration successful");
            navigate("/");
            }
            else{
              toast.error(resData.extraDetails ? resData.extraDetails:resData.message);
            }
           
          }
          catch(error){
            console.log("register",error);
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
    <label htmlFor="username">username</label>
    {renderValidationIcon("username")}
    <input
    type="text"
    name="username"
    placeholder="username"
    id="username"
    required
    autoComplete="off"
    value={values.username}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.username}
    touched={touched.username}
    style={{
      borderBottom: `${values.username === '' ? '1px solid #ccc' : (errors.username ? '1px solid red' : '1px solid #09c372')}`,
    }}
   />
      
      {errors.username && touched.username ?<p className="form-error">{errors.username}</p>:null}
    </div>
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
        error={errors.username}
        touched={touched.username}
        style={{
          borderBottom: `${values.email === '' ? '1px solid #ccc' : (errors.email? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
      {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}

    </div>
    <div className="inputBox">
      <label htmlFor="phone">Phone</label>
      {renderValidationIcon("phone")}
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        touched={touched.username}
        style={{
          borderBottom: `${values.phone === '' ? '1px solid #ccc' : (errors.phone ? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
      {errors.phone && touched.phone ?<p className="form-error">{errors.phone}</p>:null}
        
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
        error={errors.username}
        touched={touched.username}
        style={{
          borderBottom: `${values.password === '' ? '1px solid #ccc' : (errors.password ? '1px solid red' : '1px solid #09c372')}`,
        }}
      />
       {errors.password && touched.password ?<p className="form-error">{errors.password}</p>:null}
    
    
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Signup</button>
</form>
    </main>
   </section>
    </>
   )
}

