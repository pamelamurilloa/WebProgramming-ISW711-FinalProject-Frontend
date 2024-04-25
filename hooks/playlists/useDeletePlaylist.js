import {restUrl} from '../../constants'
import {useState} from 'react'

export const useDeletePlaylist = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const deletePlaylist = async (playlistId) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlistId}`, 
            {
                method: 'DELETE',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const playlistDeleted = await res.json()
            setData(playlistDeleted)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, deletePlaylist}
}