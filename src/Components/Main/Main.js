import React, { useReducer, useEffect, useRef } from 'react';
import RestaurantsContainer from './Restaurants/RestaurantsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import NavBar from './Nav/NavBar'
import { ReactFitty } from "react-fitty"
import FriendCard from "./Friends/FriendCard"

const initialState = {
  search: '',
  friendCard: ''  
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}



const Main = () => {

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              dispatch({name: 'friendCard', value: ''})
              let fitText = document.getElementById("fitText")
              if (fitText.innerText !== "katchups"){
                fitText.innerText = "katchups" 
              }             
            }
        }
  
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectedFriend = (props) => {
    dispatch({name: 'friendCard', value: <FriendCard friend={props}/>})
  }
  return (
    <div className="main" >
      <ReactFitty className="fitText" id="fitText" style={{opacity: 1}} >katchups</ReactFitty>      
      <RestaurantsContainer />
      <FriendsContainer handleSelectedFriend={handleSelectedFriend}/>
      <div ref={wrapperRef}>
        {state.friendCard}
      </div>
      <NavBar />
    </div>
  );
};

export default Main;