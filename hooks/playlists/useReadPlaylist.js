import {restUrl, graphqlUrl} from '../../constants'
import {useState} from 'react'

export const useReadPlaylist = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const readPlaylists = async (user_id) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/playlists/user/${user_id}`, 
            {
                method: 'GET',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const playlists = await res.json()
            setData(playlists)
            
        } else {
            setIsError(true);
        }
        
    }

    // GRAPHQL
    // const readKids = async (user_id) => { 
    //     setLoading(true);

    //     try {
    //         const { data } = await refetch({ userId: user_id });
    //         setData(data.kids);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setIsError(true);
    //     }

    //     setLoading(false);
    // }

    return {loading, data, isError, readPlaylists}
}