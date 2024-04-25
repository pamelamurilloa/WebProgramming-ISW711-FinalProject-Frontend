import {restUrl} from '../../constants'
import {useState} from 'react'

export const useUpdatePlaylist = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const updatePlaylist = async (playlist) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlist._id}`, 
            {
                method: 'PATCH',
                body: playlist
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const playlistUpdated = await res.json()
            setData(playlistUpdated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, updatePlaylist}
}
