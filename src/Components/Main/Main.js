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
  restaurantCard: ''
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const Main = () => { 
  const wrapperRef = useRef(null);  
  const [state, dispatch] = useReducer(reducer, initialState);
  document.addEventListener("mouseup",(e) => handleClickOutside(e, wrapperRef)); 

  const handleSelectedFriend = (props) => {
    dispatch({name: 'friendCard', value: <FriendCard friend={props}/>})
    document.getElementById("fitText").innerText = props.name
  }

  const handleSelectedRestaurant = (props) => {
    dispatch({name: 'restaurantCard', value: <RestaurantCard restaurant={props}/>})
  }

  if(localStorage.currentUser === undefined || localStorage.currentUser === "undefined" ){
    window.location="/login"
  }
  function handleClickOutside(event, ref) {
    if (ref.current && !ref.current.contains(event.target)) {      
      if (state.friendCard !== '') {        
        if (document.getElementsByClassName("listImg-outer--selected")[0]){
          const selectedFriend = document.getElementsByClassName("listImg-outer--selected")[0]
          selectedFriend.className = state.friendCard.props.friend.status + " listImg-outer"
        }

        dispatch({name: 'friendCard', value: ''})
        state.friendCard = ""

        //TODO fix state issue? ^^ dispatch returns unknown. State remains the same. Both lines are required for intended functionality...
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