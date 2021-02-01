import React, { useReducer } from 'react';
import './SignUp.css';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Actions/LoginActions"

  const initialState = {
    name: "",
    location: "",
    email: "",
    password: "",
    password_confirmation: "",    
  }

  function reducer(state, { name, value }) {
    return {
      ...state,
      [name]: value
    }
  }

  function SignUp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const storeDispatch = useDispatch()
    const user = useSelector(state => state.user)
    
    const handleChange = (e) => {
      dispatch({name: e.target.name, value: e.target.value})
    } 

    const { name, location, email, password, password_confirmation } = state
    
    const handleSubmit = (e, state) =>{
      e.preventDefault()
      storeDispatch(userLogin(state, "users"))
      debugger
    }

  return (
    <div className="login-card">
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e, state, user)}>
          <input type="text" name="name" className="input-box" value={name} onChange={handleChange} placeholder="Full Name" />
          <input type="location" id="user-location-input" name="location" className="input-box"  value={location}  onChange={handleChange} placeholder="Location (ex. Atlanta, GA)" />
          <input type="email" name="email" className="input-box"  value={email}  onChange={handleChange} placeholder="Email" />
          <input type="password" name="password" className="input-box"  value={password}  onChange={handleChange} placeholder="Password" />
          <input type="password" name="password_confirmation" className="input-box"  value={password_confirmation}  onChange={handleChange} placeholder="Confirm Password" />
          <input type="submit" id="signup-btn" name="signup-btn" className="btn" value="Sign Up" />
          <Link to="login">
            <input type="button" id="signin-btn" name="signup-btn" className="btn" value="Already have an account?" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;