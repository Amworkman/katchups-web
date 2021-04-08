import React from 'react';
import '../NavBar.scoped.css'

const User = (props) => {
  return (
    <div className="user">
      <div className="listImg-outer">
        <div className="listImg-inner"></div> <br />
        <img className="list-img" src={props.img} /><br />     
      </div>
      <h2>{props.name}</h2>  
    </div>
  );
};

export default User;