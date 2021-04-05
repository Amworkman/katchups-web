import React from 'react';
import './RestaurantsContainer.scoped.css';

const Restaurant = (props) => {
  const handleSelectedRestaurant = (props) => {
    props.handleSelectedRestaurant(props)
  }

  return (
    <div className="list">
      <div className="listImg-outer">
        <div className="listImg-inner">
          <img className="list-img" onClick={() => handleSelectedRestaurant(props)} src={props.img} /><br />
        </div>
      </div>
      <h2>{props.name}</h2> <br/>
      {props.categories.map(category => category.title).join(', ')}<br /> <br/>
      {props.rating} stars   
    </div>
  );
};

export default Restaurant;