import { patchApi } from '@src/api'
import {useState} from 'react'

export const useUpdateVideo = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const updateVideo = async (playlistId, video) => {
        setLoading(true)

        try {
            const videoUpdated = await patchApi(`/playlists/${playlistId}/${video._id}`, video)
            setData(videoUpdated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, updateVideo}
}
