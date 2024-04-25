import { useState } from 'react'
import { postApi } from '../../src/api'

export const useSession = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const login = async (email, password) => {
        setLoading(true)
        setIsError(false)

        try {
            const user = await postApi('/session/login', {email, password})
            setData(user)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, login}
}
