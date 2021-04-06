import React from 'react';
import '../NavBar.scoped.css'

const User = (props) => {
  return (
    <div className="user">
      <div className="listImg-outer">
        <div className="listImg-inner">
          <img className="list-img" src={props.img} /><br />
          <h2>{props.name}</h2> <br /> 
        </div>
      </div>
    </div>
  );
};

export default User;