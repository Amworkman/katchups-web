import React  from 'react';
import './FriendsContainer.scoped.css'



const Friend = (props) => {  
  const handleSelectedFriend = (props) => {
    props.handleSelectedFriend(props)
  }

  return (
    <div>
      <div className="listImg-outer">
        <div className="listImg-inner">
          <img  onClick={() => handleSelectedFriend(props)} className="list-img" src={props.img} /><br />
        </div>
      </div>
      <h2>{props.name}</h2> <br /> 
    </div>
  );
};

export default Friend;