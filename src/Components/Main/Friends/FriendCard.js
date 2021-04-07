import React from 'react';
import './FriendsContainer.scoped.css'



const FriendCard = (props) => {
  let fitText = document.getElementById("fitText")
  
  const changeText = () => {
    fitText.innerText = props.friend.name
  }

  return (
    <>
      {changeText()}
      <div className="friendImg-outer">
        <div className="friendImg-inner">
          <img  className="friendImg" src={props.friend.img} /><br />
        </div>
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