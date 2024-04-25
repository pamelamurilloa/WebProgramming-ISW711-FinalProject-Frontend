import React from 'react'

// Icon Imports
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Button from '@src/components/atoms/Button';

// Local Imports


const ProfileCard = ({ profile, askForEntry = null, editProfile = null, deleteProfile = null }) => {

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
                src={`/profilePictures/profile${profile.avatar}.png`}
                alt="Profile Avatar"
                onClick={handleImageClick}
            />
            <div className="under-image">
                <h3 className="profile-name">{profile.name}</h3>
                {
                    editProfile && deleteProfile &&

                    <div className="profile-actions">
                        <Button icon={<FaEdit  />} onClick={() => editProfile(profile)}>Edit</Button>
                        <Button icon={<MdDeleteForever />} onClick={() => deleteProfile(profile._id)}>Delete</Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileCard