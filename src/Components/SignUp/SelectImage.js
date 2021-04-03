import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Actions/UserActions"
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import { getCroppedImg } from './cropImage'
import './SignUp.scoped.css';

const SelectImage = ({ getBlob}) => {

  const user = JSON.parse(localStorage.currentUser)
  const [userImg, setUserImg] = useState({preview: "", raw: ""});
  const [baseImg, setBaseImg] = useState({base: ""});
  const [imageMessage, setImageMessage] = useState({message: "Choose a profile image"});
  const storeDispatch = useDispatch()
  const storeState = useSelector(state => state)

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [preview, setPreview] = useState(true)

  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(
        userImg.preview,
        croppedAreaPixels
    )
    setBaseImg({
      base: croppedImage
    });
  }

  const handleChange = (e) => {
    if (e.target.files.length) {
      setUserImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      setPreview(false)
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
        {preview ? (
          <label htmlFor="img">
          <div className="image-mask">
            upload photo
          </div>
          <img className="profile-img" name="profile_img" alt="dummy" src='/katchup.png' />
        </label>          
        ) : (          
          <div className="area">
            <div className="crop-container">            
              < Cropper
                image={userImg.preview}
                crop={crop}
                zoom={zoom}
                aspect={1 / 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropShape={'round'}                
              />
            </div>
            <div className="controls">
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(zoom)}
                classes={{ root: 'slider' }}
              />
            </div>
          </div>
        )}
        
        <h2>{imageMessage.message}</h2>
        <input style={{display: 'none'}} name="profile_img" value={baseImg.base} />
        <input style={{display: 'none'}} className="file-select" name="img" id="img" type="file" accept="image/*" multiple="false" onChange={handleChange}/>
        <input type="submit" className="submit-btn" value="CREATE USER"/>
      </form>
    </div>
  );
};

export default SelectImage;