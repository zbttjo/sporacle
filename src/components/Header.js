import React from "react";
import user from "../assets/user.png";



function Header(props){
    return(
        <div className="top-navbar">
            <img src={user} alt="user" />
            <div className="dropdown">
                <button class="dropbtn">Yassin Ait Aider
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a>Profil</a>
                <a>Settings</a>
                <a>Logout</a>
                </div>
            </div>
            </div>)
};



export default Header;