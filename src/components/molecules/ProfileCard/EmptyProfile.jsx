import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const EmptyProfile = ({addProfile, profile}) => {

    return (
        <div className="profile">
            {/* change src */}
            <img src="../../../assets/profilePictures/placeholder.png" alt="Add Profile" onClick={addProfile}/>
            <div class="under-image">
                <div class="profile-actions">
                    <Button icon={<IoMdAddCircle />} onClick={addProfile}>Add</Button>
                </div>
            </div>
        </div>
    )
}

export default EmptyProfile