import { deleteApi } from '@src/api'
import {restUrl} from '@src/constants'
import {useState} from 'react'

export const useDeletePlaylist = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const deletePlaylist = async (playlistId) => {
        setLoading(true)

        try {
            const playlistDeleted = await deleteApi(`/playlists/${playlistId}`)
            setData(playlistDeleted)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, deletePlaylist}
}