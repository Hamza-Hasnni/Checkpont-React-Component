import React from 'react'
import Image from "../../Hamza.jpg";
import "./profilePhoto.css"

const ProfilePhoto = () => {
    return (
        <div className="photo">
           <img src={Image} alt="hamza"/>
        </div>
    )
}

export default ProfilePhoto
