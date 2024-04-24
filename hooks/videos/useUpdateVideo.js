import {restUrl} from '../../constants'

export const useUpdateVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const updateVideo = async (playlistId, video) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlistId}/${video._id}`, 
            {
                method: 'PATCH',
                body: video
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const videoUpdated = await res.json()
            setData(videoUpdated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, updateVideo}
}
