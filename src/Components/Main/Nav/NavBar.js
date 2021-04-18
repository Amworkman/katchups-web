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
        <FindFriends handleSelectedFriend={props.handleSelectedFriend}/>
        <Recents />
        <Location />
        <img className="button button-img" alt="" src={user.profile_img_url} />               
        <input type="button" id="user-tag" name="user-tag" className="button button-username" value={user.name} />
        
        
        
      </div>    
    </div>
  );
};

export default NavBar;