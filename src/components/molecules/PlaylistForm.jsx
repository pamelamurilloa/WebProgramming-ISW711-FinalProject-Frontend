import React, { useEffect, useState } from 'react'
import { useReadKid } from '@hooks/kids/useReadKid'
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import Button from '../atoms/Button'
import { useAuth } from '@src/contexts/authContext'


const PlaylistForm = ({onSave, goBack, playlistToEdit = null}) => {

    const [name, setName] = useState(playlistToEdit?.name || '')
    const [selectedKids, setSelectedKids] = useState({})

    const {user} = useAuth();

    const {loading, data: kids, isError, readKids} = useReadKid()


    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({name, selectedKids})
    }
    
    useEffect(
        () => {
            if (user) {
                readKids(user._id)
            }
            
        },
        []
    )

    console.log('kids', kids)

    const handleCheckBox = (kidId, isChecked) => {
        setSelectedKids(prevState => ({
            ...prevState,
            [kidId]: isChecked,
        }));
    }

    return (
        <>
            <h2 id="playlist-form-title">Playlist Manager</h2>
            <form id="submit-playlist-changes" onSubmit={handleSubmit}>
                <Input
                    id="name" placeholder="Name" required                
                    value={name} 
                    onChange={setName}
                />
                {
                    kids?.map(kid => {
                        return (
                            <div className='flex' key={kid._id}>                            
                                <Input
                                    checked={selectedKids[kid._id] || false}
                                    onChange={(isChecked) => handleCheckBox(kid._id, isChecked)}
                                    type="checkbox"
                                    id={kid._id}
                                    value={kid._id}
                                />
                                <label htmlFor={kid._id}>{kid.name}</label>
                            </div>
                        )        
                    })
                }

                <Submit/>
                <Button onClick={goBack}>Go Back</Button>
            </form>
        </>
    )
}

export default PlaylistForm
