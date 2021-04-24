import React from 'react';
import './FriendsContainer.scoped.css'

const InfoCard = (props) => {

  let button = <button className="katchupButton" onClick={props.handleKatchup}> katchup </button>

  return (
    <>
      <div className="recents">            
          No recent katchups
        </div>
        <div className="cardInner-right">
          {button}
      </div>
    </>
  );
};

export default InfoCard;