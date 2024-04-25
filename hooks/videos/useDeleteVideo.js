import {restUrl} from '../../constants'
import {useState} from 'react'

export const useDeleteVideo = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const deleteVideo = async (playlistId, videoId) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlistId}/${videoId}`, 
            {
                method: 'DELETE'
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const videoDeleted = await res.json()
            setData(videoDeleted)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, deleteVideo}
}