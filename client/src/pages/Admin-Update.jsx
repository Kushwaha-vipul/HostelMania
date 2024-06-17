import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const AdminUpdate=()=>{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    });

    const params=useParams();
    const {authorizationToken}=useAuth();
    //get single user data details
    const  getSingleUserData=async ()=>{
        try{

       
        const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`,{
               method:"GET",
               headers:{
                      Authorization:authorizationToken,
               }
              })
              const data=await response.json();
              console.log(`users single data ;${data}`);
              setData(data);
            //   if(response.ok){
            //    getAllUsersData();
            //   }
        }
        catch(err){
              console.log(err); 
        }

             
  }

            useEffect(()=>{
                getSingleUserData();
            },[])
    const handleInput=(e)=>{
              let name=e.target.name;
              let value=e.target.value;

              setData({
                ...data,
                [name]:value,
              })
    };
    // to update data dynamically
         
    const handleSubmit=async(e)=>{
     e.preventDefault();
     try{
           const response=await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`,
           {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                   Authorization:authorizationToken,
            },
            body:JSON.stringify(data),
           } 
           );
           if(response.ok){
            toast.success("update successfully");
           }
           else{
            toast.err("not updated");
           }
          
     }catch(error){
        console.log(error);
     }
    }



    return(  <section>
        <div className="main-heading">
            <h1>Update User Details</h1>
        </div>
    <main className="box">
        <form onSubmit={handleSubmit}>
        <div className="inputBox">
<label htmlFor="username">username</label>
<input
type="text"
name="username"
placeholder="username"
id="username"
required
autoComplete="off"
value={data.username}
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
 value={data.email}
 onChange={handleInput}
 />
 </div>
 <div className="inputBox">
<label htmlFor="phone">phone no.</label>
<input
    type="phone"
    name="phone"
    id="phone"
    placeholder="type your phone no."
 required
 autoComplete="off"
 value={data.phone}
 onChange={handleInput}
 />
</div>
<button type="submit" style={{ float: 'left' }}>Update</button>
        </form>
    </main>
</section>)
}