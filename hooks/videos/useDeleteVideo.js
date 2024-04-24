const restUrl = require('../../constants')

export const useDeleteVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

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