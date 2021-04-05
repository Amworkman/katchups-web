import React, { useReducer, useRef } from 'react';
import RestaurantsContainer from './Restaurants/RestaurantsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import NavBar from './Nav/NavBar'
import { ReactFitty } from "react-fitty"
import FriendCard from "./Friends/FriendCard"
import RestaurantCard from "./Restaurants/RestaurantCard"

const initialState = {
  search: '',
  friendCard: '',
  restaurantCard: ''  
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}



const Main = () => {
  function handleClickOutside(event, st, ref) {
    if (ref.current && !ref.current.contains(event.target)) {
      if (state.friendCard !== '') {
        dispatch({name: 'friendCard', value: ''})
      }
      if (state.restaurantCard !== '') {
        dispatch({name: 'restaurantCard', value: ''})
      }
      let fitText = document.getElementById("fitText")
      if (fitText.innerText !== "katchups"){
        fitText.innerText = "katchups" 
      }             
    }
  }

  const wrapperRef = useRef(null);  
  const [state, dispatch] = useReducer(reducer, initialState);
  document.addEventListener("mouseup",(e) => handleClickOutside(e, state, wrapperRef)); 
  const handleSelectedFriend = (props) => {
    dispatch({name: 'friendCard', value: <FriendCard friend={props}/>})
  }

  const handleSelectedRestaurant = (props) => {
    dispatch({name: 'restaurantCard', value: <RestaurantCard restaurant={props}/>})
  }

  if(localStorage.currentUser === undefined || localStorage.currentUser === "undefined" ){
    window.location="/login"
  }

  return (
    <div className="main" >
      <ReactFitty maxSize="150" className="fitText" id="fitText" style={{opacity: 1}} >katchups</ReactFitty>      
      <RestaurantsContainer />
      <FriendsContainer handleSelectedFriend={handleSelectedFriend}/>
      <RestaurantsContainer handleSelectedRestaurant={handleSelectedRestaurant}/>
      <div ref={wrapperRef}>
        {state.friendCard}
        {state.restaurantCard}
      </div>
      <NavBar />
    </div>
  );
};

export default Main;