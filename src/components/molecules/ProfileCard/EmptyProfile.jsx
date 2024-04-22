import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const EmptyProfile = ({addProfile, profile}) => {

    const handleClick = () => {
        addProfile(profile._id);
    }

    return (
        <div className='profile'>
            <div class="profile">
                <img src="../../../assets/profilePictures/placeholder.png" alt="Add Profile" onClick={handleClick()}/>
                <div class="under-image">
                    <div class="profile-actions">
                        <Button icon={<IoMdAddCircle />} onClick={handleClick()}>Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyProfile