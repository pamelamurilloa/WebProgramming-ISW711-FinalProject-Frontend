import React, { useEffect, useState } from 'react'
import { useReadKid } from '@hooks/kids/useReadKid'

const PlaylistForm = (onSave) => {

    const [name, setName] = useState('')
    const [kids, setKids] = useState()
    const [selectedKids, setSelectedKids] = useState([])

    const [loading, data, isError, readKids] = useReadKid()

    const handleSubmit = () => {
        onSave({name, selectedKids})
    }
    
    useEffect(
        () => {
            readKids()
        },
        []
    )

    const handleCheckBox = ({target}) => {
        const kid = target.value;
        if (target.checked) {
            setSelectedKids([...selectedKids, kid]);
        } else {
            setSelectedKids(selectedKids.filter(item => item !== kid));
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
                    kids.map (kid => {
                        <Input
                            onChange={handleCheckBox}
                            type="checkbox"
                            key={kid._id}
                            value={kid._id}
                        >
                            {kid.name}
                        </Input>
                    })
                }

                <Submit/>
                <Button>Go Back</Button>
            </form>
        </>
    )
}

export default PlaylistForm
