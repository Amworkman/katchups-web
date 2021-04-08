import React  from 'react';
import './FriendsContainer.scoped.css'



const Friend = (props) => {  
  const handleSelectedFriend = (props) => {
    props.handleSelectedFriend(props)
    document.getElementById(`friend${props.id}`).className = "listImg-outer--selected"
  }

  return (
    <div>
      <div className="listImg-outer" id={`friend${props.id}`}>
        <div onClick={() => handleSelectedFriend(props)} className="listImg-inner"></div>
        <img className="list-img" src={props.img} /><br />        
      </div>
      <h2>{props.name}</h2> 
    </div>
  );
};

export default Friend;