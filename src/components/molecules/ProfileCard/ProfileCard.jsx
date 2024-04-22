import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ProfileCard = ({editProfile, deleteProfile, profile}) => {

    const handleEdit = () => {
        editProfile(profile._id);
    }

    const handleDelete = () => {
        deleteProfile(profile._id);
    }

    return (
        <div className='profile'>
            <div class="profile" id={profile._id}>
                <img src={`../../../assets/profilePictures/profile${profile.avatar}.png`} alt="Profile Avatar" onClick={handleEdit(profile._id)}/>
                <div class="under-image">
                    <h3 class="profile-name">{profile.name}</h3>
                    <div class="profile-actions">
                        <Button icon={<FaEdit  />} onClick={handleEdit(profile._id)}>Edit</Button>
                        <Button icon={<MdDeleteForever />} onClick={handleDelete(profile._id)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard