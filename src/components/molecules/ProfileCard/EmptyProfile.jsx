import Button from '@src/components/atoms/Button';
import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const EmptyProfile = ({addProfile}) => {

    return (
        <div className="profile">
            <img src={process.env.REACT_APP_PUBLIC_URL + `/profilePictures/placeholder.png`} alt="Add Profile" onClick={addProfile}/>
            <div className="under-image">
                <div className="profile-actions">
                    <Button icon={<IoMdAddCircle />} onClick={addProfile}>Add</Button>
                </div>
            </div>
        </div>
    )
}

export default EmptyProfile