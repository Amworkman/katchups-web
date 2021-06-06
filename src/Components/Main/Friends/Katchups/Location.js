import React, { useReducer, useEffect } from 'react';
import './datePicker.scoped.css'

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const Location = () => { 
  
  useEffect(() => {
    flexFont()
  })

  const user = JSON.parse(localStorage.currentUser)
  
  let initialState = {
    location: user.location,
  } 
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { location } = state

  const flexFont = () => {
        let relFontsize = 1.9 - location.length*0.05;
        document.getElementById("katchupLocation").style.fontSize = relFontsize+'vw';
  }  

  const handleSubmit = (e) => {
     e.preventDefault()
  }

    const handleClearField = (e) => {
      dispatch({name: e.target.name, value: ""})
  }

  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  }  

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="katchupLocation" name="location"  className="location"  onChange={handleChange} onFocus={handleClearField} placeholder="ENTER CITY" value={location}/>
      </form>
    </>
  );
};

export default Location;