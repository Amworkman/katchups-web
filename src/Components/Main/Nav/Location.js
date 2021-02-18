import React, { useReducer } from 'react';
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
    currentLocation: user.location,
    locationLength: user.location.length + 1 + "ch"
  } 
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentLocation, locationLength } = state
  

  const handleSubmit = (e) => {
     e.preventDefault()
     storeDispatch(fetchRestaurants(currentLocation))
    }

    const handleClearField = (e) => {
      dispatch({name: e.target.name, value: ""})
    }

  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
    if (currentLocation.length > 2){
      dispatch({name: e.target.id, value: e.target.value.length + 4 + "ch"})
    } else { dispatch({name: e.target.id, value: e.target.placeholder.length + 2 + "ch"})  }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}><input type="text" style={{width: locationLength}} id="locationLength" name="currentLocation"  className="button button-location"  onChange={handleChange.bind(this)} onFocus={handleClearField} placeholder="ENTER CITY" value={currentLocation}></input></form>
    </>
  );
};

export default Location;