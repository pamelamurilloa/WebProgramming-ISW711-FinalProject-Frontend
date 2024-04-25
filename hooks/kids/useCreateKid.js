import {restUrl} from '../../constants'
import { postApi } from '../../src/api'
import {useState} from 'react'

export const useCreateKid = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

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
