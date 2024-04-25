import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// Local Imports
import Button from '@atoms/Button'
import PrivateLayout from '@layouts/PrivateLayout'
import PopUp from '@molecules/PopUp'
import PinForm from '@molecules/PinForm'
import ProfileCard from '@molecules/ProfileCard/ProfileCard'
import { useReadKid } from '@hooks/kids/useReadKid'
import { useAuth } from '@contexts/authContext'
import { useSession } from '@hooks/users/useSession'
import { useKidPinSession } from '@hooks/users/useKidPinSession'
import { useUserPinSession } from '@hooks/users/useUserPinSession'


const AvatarEntry = () => {

    const navigate = useNavigate()

    const {user, setUser} = useAuth();
    const {loading, data, isError, login, logout} = useSession()

    const {loading:loadingKidLogin, data:dataReadKidLogin, isError:isErrorKidLogin, login: kidLogin} = useKidPinSession();

    const {loading:loadingUserPinLogin, data:dataReadUserPinLogin, isError:isErrorUserPinLogin, login: userLogin} = useUserPinSession();

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
            const admin = localStorage.getItem('admin')
            const kid = localStorage.getItem('kid')
            if (admin) {
                navigate("/administration");
            } else if (kid) {
                navigate("/videoFeed");
            }
        },
        [dataReadUserPinLogin, dataReadKidLogin]
    )

    const handleFurtherLogin = (pin) => {
        if (isAdmin) {
            userLogin(user._id, pin)
        } else {
            kidLogin(profileLogin._id, pin)
        }
    }

    // Header and link manipulation
    const headerLinks = [
        { id: 1, title: "Enter as Admin" },
        { id: 2, title: "Logout" }
      ];

    const handleLinkClick = (linkId) => {
        if ( linkId === 1 ) {
            setIsAdmin(true)
            setProfileLogin(user)
        } else if ( linkId === 2 ) {
            logout();
        }
    }

    return (
        <PrivateLayout headerLinks={headerLinks} onLinkClick={handleLinkClick} >
            <div className='page-content'>
                <div className="profiles" id="profile-grid">
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
                </div>

                { profileLogin &&
                    <PopUp>
                        <PinForm
                            loginTry ={(pin) => handleFurtherLogin(pin)}
                        >
                            {
                                (isErrorKidLogin || isErrorUserPinLogin) &&
                                <p>Error en el pin</p>
                            }
                            <Button
                                onClick={
                                    () => {
                                        setProfileLogin(null)
                                        setIsAdmin(null)
                                    }
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
