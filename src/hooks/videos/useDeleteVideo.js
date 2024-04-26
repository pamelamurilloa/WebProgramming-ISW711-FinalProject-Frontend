import { deleteApi } from '@src/api'
import {restUrl} from '@src/constants'
import {useState} from 'react'

export const useDeleteVideo = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const deleteVideo = async (playlistId, videoId) => {
        setLoading(true)

        try {
            const videoDeleted = await deleteApi(`/playlists/${playlistId}/${videoId}`)
            setData(videoDeleted)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }        
    }

    return {loading, data, isError, deleteVideo}
}