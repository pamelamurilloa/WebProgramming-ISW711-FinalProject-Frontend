import { getApi } from '@src/api'
import {useState} from 'react'

export const useReadVideo = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const readVideos = async (playlistId) => {
        setLoading(true)

        try {
            const videosData = await getApi(`/playlists/${playlistId}`)
            setData(videosData.videos)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, readVideos}
}