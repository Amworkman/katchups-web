import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Actions/UserActions"
import './SignUp.scoped.css';

const SelectImage = () => {

  const user = JSON.parse(localStorage.currentUser)
  const [userImg, setUserImg] = useState({preview: "", raw: ""});
  const [imageMessage, setImageMessage] = useState({message: "Choose a profile image"});
  const storeDispatch = useDispatch()
  const storeState = useSelector(state => state)

  const handleChange = (e) => {
    if (e.target.files.length) {
      setUserImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userImg.preview !== ""){
    const formData = new FormData(e.target);
    storeDispatch(updateUser(user, formData))
    } else {
      setImageMessage({message: "Click on the katchups logo to upload a profile image"})     
    }
  }

    if (storeState.updated === true){
      window.location="/"
    }

  return (
    <div className="signup-card">      
      <form onSubmit={handleSubmit} >
        <label htmlFor="profile_img">
          <div className="image-mask">
            upload photo
          </div>
        {userImg.preview ? (
          <img src={userImg.preview} alt="dummy" className="profile-img" name="profile_img" />
        ) : (
          <img className="profile-img" name="profile_img" alt="dummy" src='/katchup.png' />
        )}
        </label>
        <h2>{imageMessage.message}</h2>
        <input style={{display: 'none'}} className="file-select" name="profile_img" id="profile_img" type="file" accept="image/*" multiple="false" onChange={handleChange}/>
        <input type="submit" className="submit-btn" value="CREATE USER"/>
      </form>
    </div>
  );
};

export default SelectImage;