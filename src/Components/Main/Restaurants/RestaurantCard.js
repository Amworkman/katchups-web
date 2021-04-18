import React from 'react';
import './RestaurantsContainer.scoped.css'



const RestaurantCard = (props) => {
  let fitText = document.getElementById("fitText")
  
  const changeText = () => {
    fitText.innerText = props.restaurant.name
  }

  return (
    <>
      {changeText()}
      <div className="restaurantImg-outer">
        <div className="restaurantImg-inner"></div>
        <img  className="restaurantImg" alt="" src={props.restaurant.img} /><br />        
      </div>
      <div className="card">
        <div className="cardInner">
          <div className="recents">
            no recent katchups at {props.restaurant.name}
          </div>
          <div className="cardInner-right">
            <button className="katchupButton"> katchup here </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;