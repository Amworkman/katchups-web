import React, { useState } from 'react';
import './RestaurantsContainer.scoped.css';

const Restaurant = (props) => {
  const [stars, setStars] = useState(null)

  const handleSelectedRestaurant = (props) => {
    props.handleSelectedRestaurant(props)
    document.getElementById(`restaurant${props.id}`).className = "listImg-outer--selected"
  }

  const renderYelpStars = (props) => {
    switch (props.rating) {
      case 0:
        return "yelpStars/0.png";
      case 1:
       return "yelpStars/1.png";
      case 1.5:
        return "yelpStars/1_half.png";
      case 2:
        return "yelpStars/2.png";
      case 2.5:
        return "yelpStars/2_half.png";
      case 3:
        return "yelpStars/3.png";
      case 3.5:
        return "yelpStars/3_half.png";
      case 4:
        return "yelpStars/4.png";
      case 4.5:
        return "yelpStars/4_half.png";
      case 5:
        return "yelpStars/5.png";
      default:
        return "yelpStars/0.png";
        // TODO: noStarInfoText    
    }
  }
  
  
  return (
    <div>
      <div className="listImg-outer" id={`restaurant${props.id}`}>
        <div onClick={() => handleSelectedRestaurant(props)} className="listImg-inner"></div>
        <img className="list-img" src={props.img} alt="restaurant" /><br />        
      </div>
      <h2>{props.name}</h2> <br/>
      {props.categories.map(category => category.title).join(', ')}<br /> <br/>
      <img className="stars-img" src={renderYelpStars(props)} alt="stars"/>   
    </div>
  );
};

export default Restaurant;