const restUrl = require('../../constants')

export const useCreateVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const createVideo = async (playlistId, video) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlistId}`, 
            {
                method: 'POST',
                body: video
            }
        )

        setLoading(false)
    
        if (res.status === 201) {
            const videoCreated = await res.json()
            setData(videoCreated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, createVideo}
}
