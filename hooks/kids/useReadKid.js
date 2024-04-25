import {restUrl, graphqlUrl} from '../../constants'
import {useState} from 'react'

export const useReadKid = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

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