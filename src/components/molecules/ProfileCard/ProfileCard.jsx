import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ProfileCard = ({editProfile, deleteProfile, profile}) => {

    return (
        <div className="profile" id={profile._id}> 
        {/* change src */}
            <img src={`../../../assets/profilePictures/profile${profile.avatar}.png`} alt="Profile Avatar" onClick={() => editProfile(profile)}/>
            <div class="under-image">
                <h3 class="profile-name">{profile.name}</h3>
                <div class="profile-actions">
                    <Button icon={<FaEdit  />} onClick={() => editProfile(profile)}>Edit</Button>
                    <Button icon={<MdDeleteForever />} onClick={() => deleteProfile(profile._id)}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard