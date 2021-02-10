import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Actions/UserActions"
import './SignUp.scoped.css';

const SelectImage = () => {
  const initialState = {
    userImg: ""
  }

  const user = JSON.parse(localStorage.currentUser)
  const [userImg, setUserImg] = useState(initialState.userImg);
  const storeDispatch = useDispatch()
  const storeState = useSelector(state => state)

  const handleChange = (e) => {
    setUserImg(e.target.files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    storeDispatch(updateUser(user, formData))
  }

    if (storeState.updated === true){
      window.location="/"
    }

  return (
    <div className="signup-card">
      <img className="profile-img" name="profile_img" src={user.profile_img}/>
      <form onSubmit={handleSubmit} >
        <input className="file-select" name="profile_img" type="file" accept="image/*" multiple="false" onChange={handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default SelectImage;