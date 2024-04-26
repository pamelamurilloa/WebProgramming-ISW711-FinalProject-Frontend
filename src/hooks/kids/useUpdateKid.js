import {useState} from 'react'
import { patchApi } from '@src/api'

export const useUpdateKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const updateKid = async (kid) => {
        setLoading(true)


        try {
            const kidUpdated = await patchApi(`/kids/${kid._id}`, kid)
            setData(kidUpdated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, updateKid}
}
