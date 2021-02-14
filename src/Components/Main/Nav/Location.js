import React, { useState, useReducer } from 'react';
import { fetchRestaurants } from '../../../Actions/RestaurantActions';
import { useDispatch } from "react-redux";
import './NavBar.scoped.css'

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const Location = () => {  

  const user = JSON.parse(localStorage.currentUser)
  const storeDispatch = useDispatch();

  let initialState = {
    currentLocation: user.location
  } 
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentLocation } = state

  const handleSubmit = (e) => {
     e.preventDefault()
     storeDispatch(fetchRestaurants(currentLocation))
    }

  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  }

  

 

  return (
    <>
      <form onSubmit={handleSubmit}><input type="text" id="nav-search-input" name="currentLocation" className="button button-location"  onChange={handleChange} placeholder="ENTER CITY" value={currentLocation}></input></form>
    </>
  );
};

export default Location;