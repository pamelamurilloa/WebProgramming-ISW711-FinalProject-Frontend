import React, { useState, useEffect } from 'react'

// Local Imports
import Button from '../atoms/Button'
import PrivateLayout from '../layouts/PrivateLayout'
import PopUp from '../molecules/PopUp'
import PinForm from '../molecules/PinForm'
import ProfileCard from '../molecules/ProfileCard/ProfileCard'
import { useReadKid } from '../../../hooks/kids/useReadKid'
import { useAuth } from '../../contexts/authContext'
import { useSession } from '../../../hooks/users/useSession'


const AvatarEntry = () => {

    const {user, setUser} = useAuth();
    const {loading, data, isError, login, logout} = useSession()

    const [profileLogin, setProfileLogin] = useState(null)
    const [isAdmin, setIsAdmin] = useState(null)

    const {loading:loadingRead, data:dataReadKids, isError:isErrorRead, readKids} = useReadKid()

    useEffect(
        () => {
            if (user) {
                readKids(user._id)
            }
        },
        []
    )

    useEffect(
        () => {
            if (data) {
                setUser(user);
            }
        },
        [data]
    )

    useEffect(
        () => {
            console.log(profileLogin)
        },
        [profileLogin, isAdmin]
    )

    const handleFurtherLogin = () => {
        // confirm with database
        if (isAdmin) {

        } else {
        }
    }

    const headerLinks = [
        { id: 1, title: "Enter as Admin" },
        { id: 2, title: "Logout" }
      ];


    const handleLinkClick = (linkId) => {
        if ( linkId === 1 ) {
            setIsAdmin(true)
            const admin = user;
            setProfileLogin(admin)
        } else if ( linkId === 2 ) {
            logout();
        }
    }

    return (
        <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick} >
            <div className='page-content'>
                {/* <div className="profiles" id="profile-grid">
                    {
                        dataReadKids?.map((profile) => 
                            <ProfileCard
                                key={profile._id}
                                askForEntry={
                                    () => {
                                        setProfileLogin(profile);
                                        setIsAdmin(false)
                                    }
                                }
                                profile={profile}
                            />
                        )
                    }
                </div> */}

                { profileLogin &&
                    <PopUp>
                        <PinForm userId={profileLogin._id} loginTry={(pin) => handleFurtherLogin(pin)}>
                        <Button
                            onClick={
                                () => {
                                    setProfileLogin(null)
                                    setIsAdmin(null)}
                                }
                        >
                            Cancel
                        </Button>
                        </PinForm>
                    </PopUp>
                }
            </div>
        </PrivateLayout>
    )
}

export default AvatarEntry
