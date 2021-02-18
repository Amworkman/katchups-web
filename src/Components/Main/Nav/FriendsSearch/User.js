import React from 'react';
import '../NavBar.scoped.css'

const User = (props) => {
  return (
    <div className="user">
      <img className="list-img" src={props.img} /><br />
      <h2>{props.name}</h2> <br /> 
    </div>
  );
};

export default User;