import React from 'react';
import './NavBar.scoped.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <input type="button" id="logout-btn" name="logout-btn" className="button button-logout" value="Log Out" />
      {/* <img className=nav-img src=${user.profile_img} /> */}
      <input type="button" id="user-tag" name="user-tag" className="button button-username" value="user name" />
      <input type="button" id="find-btn" name="find-btn" className="button button-find" value="find friends" />
      <input type="button" id="katchups-btn" name="katchups-btn" className="button button-recents" value="katchups" />
      <input type="button" id="location-btn" name="location-btn" className="button button-location" value="change location" />     
    </div>
  );
};

export default NavBar;