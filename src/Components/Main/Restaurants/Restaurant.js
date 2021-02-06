import React from 'react';
import './RestaurantsContainer.scoped.css';

const Restaurant = (props) => {
  return (
    <div className="list">
      <img className="list-img" src={props.img} /><br />
      <h2>{props.name}</h2> <br/>
      {props.categories.map(category => category.title).join(', ')}<br /> <br/>
      {props.rating} stars   
    </div>
  );
};

export default Restaurant;