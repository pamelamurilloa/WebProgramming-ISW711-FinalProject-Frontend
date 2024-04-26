import { deleteApi } from '@src/api'
import {restUrl} from '@src/constants'
import {useState} from 'react'

export const useDeleteKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const deleteKid = async (kidId) => {
        setLoading(true)

        try {
            const kidDeleted = await deleteApi(`/kids/${kidId}`)
            setData(kidDeleted)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }

    }
    
    return {loading, data, isError, deleteKid}
}