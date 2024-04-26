import { getApi } from '@src/api'
import {restUrl} from '@src/constants'
import {useState} from 'react'

export const useReadKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const readKids = async (userId) => {
        setLoading(true)

        try {
            const kids = await getApi(`/kids/user/${userId}`)
            setData(kids)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, readKids}
}