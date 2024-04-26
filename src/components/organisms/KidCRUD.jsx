import React, { useEffect, useState } from 'react'

// local imports
import Button from '@atoms/Button'
import KidsForm from '@molecules/KidsForm'
import ProfileCard from '@molecules/ProfileCard/ProfileCard'
import { useCreateKid } from '@hooks/kids/useCreateKid'
import { useDeleteKid } from '@hooks/kids/useDeleteKid'
import { useUpdateKid } from '@hooks/kids/useUpdateKid'
import { useReadKid } from '@hooks/kids/useReadKid'
import EmptyProfile from '@molecules/ProfileCard/EmptyProfile'
import PopUp from '../molecules/PopUp'
import { useAuth } from '@src/contexts/authContext'
import '@components/scssGlobal/cruds.scss'
import '@components/scssGlobal/utils.scss'


const KidCRUD = () => {

    const [openForm, setOpenForm] = useState(false)
    const {user} = useAuth()

    const [profileToEdit, setProfileToEdit] = useState(null)

    const {loading:loadingDelete, data:dataDelete, isError:isErrorDelete, deleteKid} = useDeleteKid();
    const {loading:loadingCreate, data:dataCreate, isError:isErrorCreate, createKid} = useCreateKid();
    const {loading:loadingUpdate, data:dataUpdate, isError:isErrorUpdate, updateKid} = useUpdateKid();
    const {loading:loadingRead, data:dataReadKids, isError:isErrorRead, readKids} = useReadKid();

    useEffect(
        () => {
            if(user) {
                readKids(user._id)
            }
        },
        []
    )

    useEffect(
        () => {
            if(profileToEdit) {
                setOpenForm(true)
            }
        },
        [profileToEdit]
    )

    const deleteProfile = (profileId) => {
        //Confirmation message
        deleteKid(profileId)
    }
    
    useEffect(
        () => {
            if (dataCreate) {
                readKids(user._id)
                setProfileToEdit(null)
                setOpenForm(false)
            }
        },
        [dataCreate]
    )

    useEffect(
        () => {
            if (dataUpdate) {
                readKids(user._id)
                setProfileToEdit(null)
                setOpenForm(false)
            }
        },
        [dataUpdate]
    )

    useEffect(
        () => {
            if (dataDelete) {
                readKids(user._id)
                setProfileToEdit(null)
                setOpenForm(false)
            }
        },
        [dataDelete]
    )

    const handleSave = (profile) => {
        if (profile.name && profile.age && profile.avatar && !isNaN(profile.pin) ) {
            if (profileToEdit) {
                updateKid(profile)
            } else {
                profile.userId = user._id
                createKid(profile)
            }
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
                <EmptyProfile addProfile={() => {setOpenForm(true); setProfileToEdit(null)}}/>
            </div>

            { openForm &&
                <PopUp>
                    <KidsForm
                        kid={profileToEdit}
                        onSave={handleSave}
                        onCancel={() => {setOpenForm(false); setProfileToEdit(null) }}
                    />
                </PopUp>
            }
        </section>
    )
}

export default KidCRUD