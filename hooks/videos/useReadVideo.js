import {restUrl} from '../../constants'
import {graphqlUrl} from '../../constants'

export const useReadVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const readVideos = async (playlistId, query) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/${playlistId}`, 
            {
                method: 'GET',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const videos = await res.json()
            setData(videos)
            
        } else {
            setIsError(true);
        }
        
    }

    // GRAPHQL
    // const readVideos = async (user_id) => { 
    //     setLoading(true);

    //     try {
    //         const { data } = await refetch({ userId: user_id });
    //         setData(data.videos);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setIsError(true);
    //     }

    //     setLoading(false);
    // }

    return {loading, data, isError, readVideos}
}