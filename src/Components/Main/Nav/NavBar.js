import React from 'react';
import './NavBar.scoped.css'
import { useDispatch } from "react-redux";

const NavBar = () => {
  const user = JSON.parse(localStorage.currentUser)
  const storeDispatch = useDispatch()

  const handleLogout = () => {
    localStorage.clear()
    storeDispatch({ type: 'USER_LOGOUT' }) 
    window.location="/login"   
  }

  return (
    <div className="navbar">
      <div className="middle">
        <div className="burger-menu">
          <img className="button button-burger" src='burger.png' /> 
          <input type="button" id="logout-btn" name="logout-btn" onClick={handleLogout} className="button menu-button logout" value="logout" />
          <input type="button" id="settings-btn" name="settings-btn" className="button menu-button settings" value="settings" />
          <input type="button" id="dark-btn" name="dark-btn" className="button menu-button dark" value="dark mode: off" />
        </div>
        <img className="button button-img" src={user.profile_img} />               
        <input type="button" id="user-tag" name="user-tag" className="button button-username" value={user.name} />
        <input type="button" id="find-btn" name="find-btn" className="button button-find" value="find friends" />
        <input type="button" id="katchups-btn" name="katchups-btn" className="button button-recents" value="katchups" />
        <input type="button" id="location-btn" name="location-btn" className="button button-location" value={user.location} /> 
      </div>    
    </div>
  );
};

export default NavBar;