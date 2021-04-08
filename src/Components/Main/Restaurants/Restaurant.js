import React from 'react';
import './RestaurantsContainer.scoped.css';

const Restaurant = (props) => {
  const handleSelectedRestaurant = (props) => {
    props.handleSelectedRestaurant(props)
    document.getElementById(`restaurant${props.id}`).className = "listImg-outer--selected"
  }
  
  return (
    <div>
      <div className="listImg-outer" id={`restaurant${props.id}`}>
        <div onClick={() => handleSelectedRestaurant(props)} className="listImg-inner"></div>
        <img className="list-img" src={props.img} /><br />        
      </div>
      <h2>{props.name}</h2> <br/>
      {props.categories.map(category => category.title).join(', ')}<br /> <br/>
      {props.rating} stars   
    </div>
  );
};

export default Restaurant;