import React from 'react';
import styles from './FriendsContainer.scoped.css'

const Friend = (props) => {
  return (
    <div>
      <img className="list-img" src={props.img} /><br />
      <h2>{props.name}</h2> <br /> <br /> <br />
    </div>
  );
};

export default Friend;