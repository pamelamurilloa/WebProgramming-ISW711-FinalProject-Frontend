import {restUrl} from '@src/constants'
import { patchApi } from '@src/api'
import {useState} from 'react'

export const useUpdatePlaylist = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const updatePlaylist = async (playlist) => {
        setLoading(true)

        try {
            const playlistUpdated = await patchApi(`/playlists/${playlist._id}`, playlist)
            setData(playlistUpdated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, updatePlaylist}
}
