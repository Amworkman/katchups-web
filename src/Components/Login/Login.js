import React, { useReducer } from 'react';
import './Login.scoped.css';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Actions/LoginActions"

  const initialState = {
    email: "",
    password: ""   
  }

  function reducer(state, { name, value }) {
    return {
      ...state,
      [name]: value
    }
  }

  const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const storeDispatch = useDispatch()
    const storeState = useSelector(state => state)
    const handleChange = (e) => {
      dispatch({name: e.target.name, value: e.target.value})
    } 

    const { email, password } = state 
    
    const handleSubmit = (e, state) =>{
      e.preventDefault()
      storeDispatch(userLogin(state, "login"))
    }

    if(storeState.loggedIn === true && localStorage.currentUser !== undefined && localStorage.currentUser !== "undefined") { 
      window.location="/"
    }

  return (
    <div className="login-card">
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e, state)}>
          <input type="email" name="email" className="input-box"  value={email}  onChange={handleChange} placeholder="Email" />
          <input type="password" name="password" className="input-box"  value={password}  onChange={handleChange} placeholder="Password" />
          <input type="submit" name="login-btn" className="btn" value="Sign In" />
          <Link to="/sign-up">
            <input type="button" id="signup-btn" name="signup-btn" className="btn" value={"Don't have an account?"} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;