import React from 'react'

// Icon Imports
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Local Imports


const ProfileCard = ({editProfile, deleteProfile, askForEntry, profile}) => {

    const handleImageClick = () => {
        if(askForEntry) {
            askForEntry(profile)
        } else {
            editProfile(profile)
        }
    }

    return (
        <div className="profile" id={profile._id}>         
            <img
                src={process.env.PUBLIC_URL + `/profilePictures/profile${profile.avatar}.png`}
                alt="Profile Avatar"
                onClick={handleImageClick}
            />
            <div class="under-image">
                <h3 class="profile-name">{profile.name}</h3>
                {
                    editProfile && deleteProfile &&

                    <div class="profile-actions">
                        <Button icon={<FaEdit  />} onClick={() => editProfile(profile)}>Edit</Button>
                        <Button icon={<MdDeleteForever />} onClick={() => deleteProfile(profile._id)}>Delete</Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileCard