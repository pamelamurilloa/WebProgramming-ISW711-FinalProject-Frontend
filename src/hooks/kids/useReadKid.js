import {restUrl, graphqlUrl} from '@src/constants'
import {useState} from 'react'

export const useReadKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const readKids = async (userId) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/kids/user/${userId}`, 
            {
                method: 'GET',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const kids = await res.json()
            setData(kids)
            
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

    return {loading, data, isError, readKids}
}