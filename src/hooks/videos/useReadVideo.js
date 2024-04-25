import {restUrl, graphqlUrl} from '@src/constants'
import {useState} from 'react'

export const useReadVideo = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

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