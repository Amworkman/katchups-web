import React, { useState, useEffect } from 'react';
import './datePicker.scoped.css'

const Location = (props) => { 
  const user = JSON.parse(localStorage.currentUser)

  const [location, setLocation] = useState(user.location)
  
  useEffect(() => {
    adjustFontSize()
    props.updateLocation(location)
  },[location])  

  const adjustFontSize = () => {
        const fontSize = 1.9 - location.length*0.05
        document.getElementById("katchupLocation").style.fontSize = fontSize+'vw'
  }  

  const handleSubmit = (e) => {
     e.preventDefault()
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
          id="katchupLocation" 
          className="location" 
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