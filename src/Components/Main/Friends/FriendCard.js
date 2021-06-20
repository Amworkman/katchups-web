import React, {useReducer, useEffect, useState} from 'react';
import './FriendsContainer.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { acceptFriendRequest, rejectFriendRequest } from "../../../Actions/FriendActions"
import DatePicker from "./Katchups/dateTimePicker/DatePicker"
import InfoCard from "./InfoCard"

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
  const [cardState, setCardState] = useState('showCard')
  const [state, dispatch] = useReducer(reducer, initialState);
  let fitText = document.getElementById("fitText")
  const storeDispatch = useDispatch()
  

  useEffect(() => {
		if ( props.friend.status === "request" ) {
      dispatch({name: 'acceptButton', value: <button className="acceptButton" onClick={handleAccept}> <FontAwesomeIcon icon={faCheck} /> </button>})
      dispatch({name: 'rejectButton', value: <button className="rejectButton" onClick={handleReject}> <FontAwesomeIcon icon={faTimes} /> </button>})
    }
  });
  
  const handleKatchup = () => {
    fitText.innerText = ""
    const datePickerBox = document.getElementById("datePickerBox");  
    datePickerBox.classList.toggle("datePickerBox-active");
    document.getElementById("friendImg").innerHTML = ""  
    document.getElementById("friendImg").className = "friendImg-outer--transparent"
    document.getElementById("friendCard").className ="katchupCard" 
    setCardState("showDatePicker")  
  }

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

  return (
    <>    
      <div id="friendImg" className="friendImg-outer">
        <div className="friendImg-inner"></div>
        <img  className="friendImg" src={props.friend.img} alt="firend"/><br />        
      </div>
      <div className="card" id="friendCard">
        <div className="cardInner" id="cardInner">
        <div id="datePickerBox" className="datePickerBox-hidden"><div id="datepicker"></div></div>
        {cardState === 'showDatePicker' && (          
          <DatePicker friendID={friendID}/>
        )}
        {cardState === 'showCard' && (
          <InfoCard handleKatchup={handleKatchup} friend={props.friend}/>      
        )}          
        </div>         
      </div>
      {state.acceptButton}
      {state.rejectButton} 
    </>
  );
};

export default FriendCard;