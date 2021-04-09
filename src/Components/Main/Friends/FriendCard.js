import React from 'react';
import './FriendsContainer.scoped.css'



const FriendCard = (props) => {
  let fitText = document.getElementById("fitText")
  
  const changeText = () => {
    fitText.innerText = props.friend.name
  }

  if (props.friend.confirmed == false)
  // TODO: change button 
  // style and function depending on .confirmed value

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
            <button className="katchupButton"> katchup </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendCard;