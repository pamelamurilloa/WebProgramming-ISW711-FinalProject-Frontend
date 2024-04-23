import React, { useEffect, useState } from 'react'

// local imports
import Button from '../atoms/Button'
import KidsForm from '../molecules/KidsForm'
import ProfileCard from '../molecules/ProfileCard/ProfileCard'
import { useCreateKid } from '../../../hooks/kids/useCreateKid'
import { useDeleteKid } from '../../../hooks/kids/useDeleteKid'
import { useUpdateKid } from '../../../hooks/kids/useUpdateKid'
import { useReadKid } from '../../../hooks/kids/useReadKid'
import EmptyProfile from '../molecules/ProfileCard/EmptyProfile'

const KidCRUD = () => {

    const [openForm, setOpenForm] = useState('')
    const [profileToEdit, setProfileToEdit] = useState(null)

    const {loading:loadingDelete, data:dataDelete, isError:isErrorDelete, deleteKid} = useDeleteKid();
    const {loading:loadingCreate, data:dataCreate, isError:isErrorCreate, createKid} = useCreateKid();
    const {loading:loadingUpdate, data:dataUpdate, isError:isErrorUpdate, updateKid} = useUpdateKid();
    const {loading:loadingRead, data:dataReadKids, isError:isErrorRead, readKids} = useReadKid();

    useEffect(
        () => {
            readKids()
        },
        []
    )

    const deleteProfile = (profileId) => {
        //Confirmation message
        deleteKid(profileId)
    }
    
    const handleSave = (profile) => {
        if (profile.name && profile.age && profile.avatar && !isNaN(profile.pin) ) {
            if (profile._id) {
                updateKid(profile)
            } else {
                createKid(profile)
            }
            
            setProfileToEdit(null)
            setOpenForm(false)
        }
    }

    return (
        <section id="kid-section">
            <h3>Kids</h3>

            <div className="profiles" id="profile-grid">
                {
                    dataReadKids?.map((profile) => 
                        <ProfileCard
                            key={profile._id}
                            editProfile={() => setProfileToEdit(profile)}
                            deleteProfile={deleteProfile} 
                            profile={profile}
                        />
                    )
                }
                <EmptyProfile addProfile={() => setOpenForm(true)}/>
            </div>

            { (openForm || profileToEdit) &&
                <PopUp>
                    <KidsForm kid={profileToEdit} onSave={handleSave}/>
                </PopUp>
            }
        </section>
    )
}

export default KidCRUD