import React, { useEffect, useState } from 'react'
import { useReadKid } from '@hooks/kids/useReadKid'
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import Button from '../atoms/Button'
import { useAuth } from '@src/contexts/authContext'

const PlaylistForm = ({onSave, goBack, playlist = null}) => {

    const [name, setName] = useState(playlist?.name || '')
    const [selectedKids, setSelectedKids] = useState([])

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

    const handleCheckBox = (checked, kidId) => {
        if (checked) {
            setSelectedKids([...selectedKids, kidId]);
        } else {
            setSelectedKids(selectedKids.filter(item => item !== kidId));
        }
    }

    return (
        <>
            <h2 id="playlist-form-title">Create a new Playlist</h2>
            <form id="submit-playlist-changes" onSubmit={handleSubmit}>
                <Input
                    id="name" placeholder="Name" required                
                    value={name} 
                    onChange={setName}
                />
                {
                    kids?.map(kid => {
                        return (
                            <div key={kid._id}>                            
                                <label htmlFor={kid._id}>{kid.name}</label>
                                <Input
                                    checked={false}
                                    onChange={(checked) => handleCheckBox(checked, kid._id)}
                                    type="checkbox"
                                    id={kid._id}
                                    value={kid._id}
                                />
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
