import {restUrl} from '../../constants'
import {useState} from 'react'

export const useUpdateVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const updateVideo = async (playlistId, video) => {
        setLoading(true)

        try {
            const videoUpdated = await postApi(`/playlists/${playlistId}/${video._id}`, video)
            setData(videoUpdated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, updateVideo}
}
