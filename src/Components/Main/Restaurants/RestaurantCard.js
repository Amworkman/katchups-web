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
          <div className="restaurantInfo">
          
            <div className="restaurantInfoInner">
              <h3>{props.restaurant.location.display_address[0]}</h3>
              <h3>{props.restaurant.location.display_address[1]}</h3>
              <h4>{props.restaurant.phone}</h4>
              <div>
                <span className="price">{props.restaurant.price}</span>
                <span className="emptyPrice">$$$$</span>
              </div>  <br />        
              <div className="hours">
                <a href={props.restaurant.url} target="_blank" rel="noopener noreferrer">
                  BUSINESS HOURS
                </a>
              </div>
              <div className="reviews">
                <span className="reviewText">{props.restaurant.reviewCount} reviews on </span>
                <a href={props.restaurant.url} target="_blank" rel="noopener noreferrer">
                  <img className="yelpImg" src="/yelp.png"/>
                </a>
              </div>
            </div>
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