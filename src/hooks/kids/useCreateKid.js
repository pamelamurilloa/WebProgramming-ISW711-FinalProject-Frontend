import { postApi } from '@src/api'
import {useState} from 'react'

export const useCreateKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const createKid = async (kid) => {
        setLoading(true)

        try {
            const kidCreated = await postApi('/kids', kid)
            setData(kidCreated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, createKid}
}
