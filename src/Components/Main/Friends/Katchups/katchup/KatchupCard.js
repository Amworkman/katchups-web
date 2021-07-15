import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./katchupCard.scoped.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userUpdateKatchup } from '../../../../../Actions/KatchupActions'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons'

const KatchupCard = () => {

  const [restaurantIndex, setRestaurantIndex] = useState(0)
  const [match, setMatch] = useState([])
  const katchup = useSelector((state) => JSON.parse(state.currentKatchup)); 
  const fitText = document.getElementById("fitText")  
  const location = katchup.katchup_array[restaurantIndex].location["formatted_address"]
  const imgOuter = document.getElementById("imgOuter")
  const imgInner = document.getElementById("imgInner")
  const img = document.getElementById("img")
  const storeDispatch = useDispatch()

  fitText.innerText = katchup.katchup_array[restaurantIndex].name
  imgOuter.className = "img-outer"
  imgInner.classname = "img-inner"
  img.className = "img"
  img.src = katchup.katchup_array[restaurantIndex].photos[0]
  img.alt = ""

  const handleLikeClick = () => {
    if (restaurantIndex < katchup.katchup_array.length - 1){
      storeDispatch(userUpdateKatchup(katchup.id, katchup.katchup_array[restaurantIndex].id))
      setMatch(katchup.user_array.filter(restaurantId => katchup.friend_array.includes(restaurantId)))
      setRestaurantIndex(restaurantIndex + 1)
    }
  }

  const handleDislikeClick = () => {
    if (restaurantIndex < katchup.katchup_array.length - 1){
      setRestaurantIndex(restaurantIndex + 1)
    }
  }

  if(match.length > 0){
    fitText.innerText = "MATCH"
  }

  const renderYelpStars = () => {
    switch (katchup.katchup_array[restaurantIndex].rating) {
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
    <>
      <h3>{location}</h3>
      <h4>{katchup.katchup_array[restaurantIndex].phone}</h4>
      <div>
        <span className="price">{katchup.katchup_array[restaurantIndex].price}</span>
        <span className="emptyPrice">$$$$</span>
      </div>
      <img className="stars-img" src={renderYelpStars()} alt="stars"/>
      <div className="reviews">
        <span className="reviewText"> from {katchup.katchup_array[restaurantIndex].review_count} reviews on </span>
        <a href={katchup.katchup_array[restaurantIndex].url} target="_blank" rel="noopener noreferrer">
          <img className="yelpImg" src="/yelp.png"/>
        </a>
      </div>
      <button className="likeButton" onClick={handleLikeClick}> <FontAwesomeIcon icon={faThumbsUp}/> </button>
      <button className="dislikeButton" onClick={handleDislikeClick}> <FontAwesomeIcon flip="horizontal" icon={faThumbsDown}/> </button>
    </>
  );
};

export default KatchupCard;