import {restUrl} from '@src/constants'
import {useState} from 'react'

export const useDeleteKid = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const deleteKid = async (kidId) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/kids/${kidId}`, 
            {
                method: 'DELETE',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const kidDeleted = await res.json()
            setData(kidDeleted)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, deleteKid}
}