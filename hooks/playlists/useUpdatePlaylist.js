import {restUrl} from '../../constants'
import { patchApi } from '../../src/api'
import {useState} from 'react'

export const useUpdatePlaylist = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const updatePlaylist = async (playlist) => {
        setLoading(true)

        try {
            const playlistUpdated = await postApi(`/playlists/${playlist._id}`, playlist)
            setData(playlistUpdated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, updatePlaylist}
}
