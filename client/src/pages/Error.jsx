import { NavLink } from "react-router-dom"
export const Error=()=>{
    return(
        <>
   <section id="notExist">
    <div className="content">
        <h2 className="header">404</h2>
        <h3> error,page does not exist</h3>
       
       <p>Go Back!!</p>
       <div className="btns">
        <NavLink to="/">Home</NavLink>
       </div>
    </div>

   </section>

        </>
    )
}