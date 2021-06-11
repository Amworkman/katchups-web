import React from 'react';
import './NavBar.scoped.css'
import FindFriends from './FriendsSearch/FindFriends'
import Location from './Location'
import Recents from './Recents'

const NavBar = (props) => {
  const user = JSON.parse(localStorage.currentUser)

  return (
    <div className="navbar">
      <div className="middle">
      <div className="container-location">
          <Location />
        </div>        
        <div className="container-recents">
          <Recents />
        </div>
        <div className="container-friends">
          <FindFriends handleSelectedFriend={props.handleSelectedFriend}/>
        </div>        
        <img className="button button-img" alt="" src={user.profile_img_url} />               
        <input type="button" id="user-tag" name="user-tag" className="button button-username" value={user.name} />
        
        
        
      </div>    
    </div>
  );
};

export default NavBar;