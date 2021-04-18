import React from 'react';
import './FriendsContainer.scoped.css'


const Friend = (props) => { 

  const handleSelectedFriend = (props) => {
    props.handleSelectedFriend(props)
    document.getElementById(`friend${props.id}`).className = "listImg-outer--selected"    
  } 

  return (
    <div id={`listFriend${props.id}`}>
      <div className={props.status + " listImg-outer"} id={`friend${props.id}`}>
        <div onClick={() => handleSelectedFriend(props)} className="listImg-inner"/>
        <img className="list-img" src={props.img} alt="friend"/><br />     
      </div>      
      <h2>{props.name}</h2> 
    </div>
  );
};

export default Friend;