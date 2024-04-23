import React, { useState } from 'react'
import PrivateLayout from '../layouts/PrivateLayout'
import PopUp from '../molecules/PopUp'
import { useReadKid } from '../../../hooks/kids/useReadKid'

const AvatarEntry = () => {

    const {user, setUser} = useAuth();
    const {loading, data, isError, login} = useSession()

    const [profileLogin, setProfileLogin] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)

    const {loading:loadingRead, data:dataReadKids, isError:isErrorRead, readKids} = useReadKid();


    useEffect(
        () => {
            readKids()
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

    const handleLogin = () => {
        // confirm with database
        if (isAdmin){
        } else {
        }
    }

    return (
        <PrivateLayout>
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
                        <PinForm userId={profile._id} loginTry={handleLogin(pin)}></PinForm>
                    </PopUp>
                }
            </div>
        </PrivateLayout>
    )
}

export default AvatarEntry
