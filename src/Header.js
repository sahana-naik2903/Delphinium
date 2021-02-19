import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import './index.css';
const Header = () => {
    return(
        <>
         <div className="head_div">
         <i class="fab fa-facebook-f"></i>
         <i class="fab fa-twitter"></i>
         <i class="fab fa-youtube"></i>
         <i class="fab fa-linkedin-in"></i>
             <p>enquiry@delphiniumsoftech.com Mon-Fri 10.00-06.00</p>
         </div>
         <ul className="nav-items">
         <img id="logo" src={logo} alt="Company Logo"/>
         
      
         <li><NavLink exact activeClassName="active" to="/home">WHO WE SERVE</NavLink></li>
         <li><NavLink exact activeClassName="active" to="/home">INDUSTRIES</NavLink></li>
         <li><NavLink exact activeClassName="active" to="/home">DEDICATED RESOURCES</NavLink></li>
         <li><NavLink exact activeClassName="active" to="/home">PORTFOLIO</NavLink></li>
         <li><NavLink exact activeClassName="active" to="/home">DISCOVER DELPHINIUM</NavLink></li>
         <li><NavLink exact activeClassName="active" to="/home">DISCUSS YOUR PROJECT</NavLink></li>
         </ul>
         
        </>
    )
}
export default Header;