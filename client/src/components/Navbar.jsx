import {NavLink} from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
export const Navbar =()=>{
const {isLoggedIn}=useAuth();

    return (<>
    <header>
        <div className="boxes">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-faded">

        <div className="container">
        
            <div className="mainLogo">
                <h2>HostelMania</h2>
            </div>
           
            <ul className="navbar-nav">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/service">Services</NavLink></li>
                    
               {isLoggedIn ?(  <li className="nav-item"><NavLink to="/logout">Logout</NavLink></li>):(<>
               
                <li className="nav-item" ><NavLink to="/register">Register</NavLink></li>
                    <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
               </>)}
                 
                </ul>
           
        </div>
        </nav>
        </div>
    </header>
      </>
    )
}