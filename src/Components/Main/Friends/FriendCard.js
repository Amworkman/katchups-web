import React from 'react';
import './FriendsContainer.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { friendRequest } from "../../../Actions/UserActions"

const FriendCard = (props) => {
  let fitText = document.getElementById("fitText")
  const storeDispatch = useDispatch()

  const handleKatchup = () => {

  }
  
  const handleAddFriend = () => {
    const userID = JSON.parse(localStorage.currentUser).id
    const friendID = props.friend.id
    storeDispatch(friendRequest(userID, friendID))
  }

  const changeText = () => {
    fitText.innerText = props.friend.name
  }

  let button = <button className="katchupButton" onClick={handleKatchup}> katchup </button>

  if (props.friend.confirmed == false){
    button = <button className="katchupButton" style={{backgroundColor: "#5387e7"}} onClick={handleAddFriend}> <FontAwesomeIcon icon={faUserFriends} /> </button>
  }  

  return (
    <>
      {changeText()}
      <div className="friendImg-outer">
        <div className="friendImg-inner"></div>
        <img  className="friendImg" src={props.friend.img} /><br />        
      </div>
      <div className="card">
        <div className="cardInner">
          <div className="recents">
            no recent katchups
          </div>
          <div className="cardInner-right">
            {button}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendCard;