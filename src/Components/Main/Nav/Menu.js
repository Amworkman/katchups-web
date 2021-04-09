import React from 'react';
import './NavBar.scoped.css'
import { useDispatch } from "react-redux";

const Menu = () => {
  const storeDispatch = useDispatch()

  const handleLogout = () => {
    localStorage.clear()
    storeDispatch({ type: 'USER_LOGOUT' }) 
    window.location="/login"   
  }

  const handleClick = () => {
    if (document.getElementsByClassName("burger-menu")[0]){
      document.getElementsByClassName("burger-menu")[0].className = "burger-menu--selected"
    }
  }

  return (
    <div className="burger-menu" onClick={handleClick}>
      <img className="button button-burger" src='burger.png' /> 
      <input type="button" id="logout-btn" name="logout-btn" onClick={handleLogout} className="button menu-button logout" value="logout" />
      <input type="button" id="settings-btn" name="settings-btn" className="button menu-button settings" value="settings" />
      <input type="button" id="dark-btn" name="dark-btn" className="button menu-button dark" value="dark mode: off" />
    </div>
  );
};

export default Menu;