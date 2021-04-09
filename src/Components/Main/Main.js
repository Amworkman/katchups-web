import React, { useReducer, useRef } from 'react';
import RestaurantsContainer from './Restaurants/RestaurantsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import NavBar from './Nav/NavBar'
import { ReactFitty } from "react-fitty"
import FriendCard from "./Friends/FriendCard"
import RestaurantCard from "./Restaurants/RestaurantCard"
import Menu from "./Nav/Menu"

const initialState = {
  search: '',
  friendCard: '',
  restaurantCard: '',
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
        if (document.getElementsByClassName("listImg-outer--selected")[0]){
          const selectedFriend = document.getElementsByClassName("listImg-outer--selected")[0]
          selectedFriend.className = "listImg-outer"
        }
      }
      if (state.restaurantCard !== '') {
        dispatch({name: 'restaurantCard', value: ''})
        if (document.getElementsByClassName("listImg-outer--selected")[0]){
          const selectedFriend = document.getElementsByClassName("listImg-outer--selected")[0]
          selectedFriend.className = "listImg-outer"
        }
      }
      if (document.getElementsByClassName("burger-menu--selected")[0]){
        const selectedFriend = document.getElementsByClassName("burger-menu--selected")[0]
        selectedFriend.className = "burger-menu"
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
      <FriendsContainer handleSelectedFriend={handleSelectedFriend}/>
      <RestaurantsContainer handleSelectedRestaurant={handleSelectedRestaurant}/>
      <div ref={wrapperRef}>
        {state.friendCard}
        {state.restaurantCard}
        <Menu />
      </div>
      <NavBar handleSelectedFriend={handleSelectedFriend}/>
    </div>
  );
};

export default Main;