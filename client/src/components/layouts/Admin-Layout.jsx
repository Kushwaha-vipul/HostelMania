import {NavLink,Outlet,Navigate} from "react-router-dom";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbHome } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { MdOutlineElectricalServices } from "react-icons/md";
import { useAuth } from "../../store/auth";

export const AdminLayout=()=>{
    const {user,isLoading}=useAuth();
      if(isLoading){
        return <h1>Loading..</h1>
      }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return <>
    <header>
        
<div className="admin-nav-container">
    <nav>
        <ul className="admin-navbar">
            <li className="nav-item"><NavLink to="/admin/"><TbHome />Home</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/contacts"><TiContacts/>contacts</NavLink></li>
            <li className="nav-item"><NavLink to="/admin/users"><PiUsersThreeFill />users</NavLink></li>
            <li className="nav-item"><NavLink to="/services"><MdOutlineElectricalServices/>services</NavLink></li>
        </ul>
    </nav>
</div>

        </header>
        <Outlet/>
        </>
}