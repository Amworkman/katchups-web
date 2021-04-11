import React, {useReducer, useEffect} from 'react';
import './FriendsContainer.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { friendRequest } from "../../../Actions/UserActions"
import { acceptFriendRequest, rejectFriendRequest } from "../../../Actions/FriendActions"

const initialState = {
  acceptButton: "",
  rejectButton: ""
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const FriendCard = (props) => {
  const userID = JSON.parse(localStorage.currentUser).id
  const friendID = props.friend.id

  const [state, dispatch] = useReducer(reducer, initialState);
  let fitText = document.getElementById("fitText")
  const storeDispatch = useDispatch()

  const handleKatchup = () => {

  }

  useEffect(() => {
		if ( props.friend.status === "request" ) {
      dispatch({name: 'acceptButton', value: <button className="acceptButton" onClick={handleAccept}> <FontAwesomeIcon icon={faCheck} /> </button>})
      dispatch({name: 'rejectButton', value: <button className="rejectButton" onClick={handleReject}> <FontAwesomeIcon icon={faTimes} /> </button>})
    }
	});

  const handleAccept = () => {
    dispatch({name: 'acceptButton', value: ""})
    dispatch({name: 'rejectButton', value:""})
    storeDispatch(acceptFriendRequest(userID, friendID)).then(() => {
      props.friend.refreshFriendsList()
    })  }

  const handleReject = () => {
    dispatch({name: 'acceptButton', value: ""})
    dispatch({name: 'rejectButton', value:""})
    storeDispatch(rejectFriendRequest(userID, friendID)).then(() => {
      props.friend.refreshFriendsList()
    })  }
  
  const handleAddFriend = () => {
    storeDispatch(friendRequest(userID, friendID))
  }

  const changeText = () => {
    fitText.innerText = props.friend.name
  }

  let button = <button className="katchupButton" onClick={handleKatchup}> katchup </button>

  if (props.friend.confirmed === false){
    button = <button className="katchupButton" style={{backgroundColor: "#5387e7"}} onClick={handleAddFriend}> <FontAwesomeIcon icon={faUserFriends} /> </button>
  }

  return (
    <>
      {changeText()}
      <div className="friendImg-outer">
        <div className="friendImg-inner"></div>
        <img  className="friendImg" src={props.friend.img} alt="firend"/><br />        
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
      {state.acceptButton}
      {state.rejectButton} 
    </>
  );
};

export default FriendCard;