import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../../../Actions/RestaurantActions';
import { useDispatch } from "react-redux";
import './NavBar.scoped.css'

const Location = () => {
  const user = JSON.parse(localStorage.currentUser)
  const [location, setLocation] = useState(user.location)
  const storeDispatch = useDispatch();
  
  
  useEffect(() => {
    adjustInputSize()
  },[location]) 
  
  const adjustInputSize = () => {
    const locationButton = document.getElementById("userLocation")
    if (location.length < 1){
      locationButton.style.width = locationButton.placeholder.length+2+'ch'
    }else{
      locationButton.style.width = location.length+5+'ch'
    }
  }

  const handleSubmit = (e) => {
     e.preventDefault()
     storeDispatch(fetchRestaurants(location))
    }

    const handleClearField = (e) => {
      setLocation("")
    }

  const handleChange = (e) => {
    setLocation(e.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="userLocation"  
          className="button button-location"  
          onChange={handleChange} 
          onFocus={handleClearField} 
          placeholder="ENTER CITY" 
          spellCheck="false"
          value={location}
        />
      </form>
    </>
  );
};

export default Location;