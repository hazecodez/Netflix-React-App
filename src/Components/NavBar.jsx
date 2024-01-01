import React from "react";
import "../StyleSheets/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="tabs">
      <ul>
        <li>Home</li>
        <li>Originals</li>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
      </div>
        
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      
    </div>
  );
}

export default NavBar;
