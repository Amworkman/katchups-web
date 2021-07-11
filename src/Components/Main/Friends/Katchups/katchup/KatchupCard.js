import React, {useState} from 'react';
import { useSelector } from "react-redux"
import "./katchupCard.scoped.css"

const KatchupCard = () => {

  const [restaurantIndex, setRestaurantIndex] = useState(0)
  const katchup = useSelector((state) => JSON.parse(state.currentKatchup)); 
  const fitText = document.getElementById("fitText")  
  const location = katchup.katchup_array[restaurantIndex].location["formatted_address"].split("\n")
  const imgOuter = document.getElementById("imgOuter")
  const imgInner = document.getElementById("imgInner")
  const img = document.getElementById("img")

  fitText.innerText = katchup.katchup_array[restaurantIndex].name
  imgOuter.className = "img-outer"
  imgInner.classname = "img-inner"
  img.className = "img"
  img.src = katchup.katchup_array[restaurantIndex].photos[0]
  img.alt = ""

  const handleClick = () => {
    setRestaurantIndex(restaurantIndex += 1)
  }
  
  return (
    <>
      <h3>{location[0]}</h3>
      <h3>{location[1]}</h3>
      <h4>{katchup.katchup_array[restaurantIndex].phone}</h4>
      <div>
        <span className="price">{katchup.katchup_array[restaurantIndex].price}</span>
        <span className="emptyPrice">$$$$</span>
      </div>  <br />        
      <div className="hours">
        <a href={katchup.katchup_array[restaurantIndex].url} target="_blank" rel="noopener noreferrer">
          BUSINESS HOURS
        </a>
      </div>
      <div className="reviews">
        <span className="reviewText">{katchup.katchup_array[restaurantIndex].reviewCount} reviews on </span>
        <a href={katchup.katchup_array[restaurantIndex].url} target="_blank" rel="noopener noreferrer">
          <img className="yelpImg" src="/yelp.png"/>
        </a>
      </div>
      <button className="likeButton" onClick={handleClick}> yes </button>
      <button className="dislikeButton" onClick={handleClick}> no </button>
    </>
  );
};

export default KatchupCard;