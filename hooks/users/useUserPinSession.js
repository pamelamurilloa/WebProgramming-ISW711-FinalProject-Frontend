import { useState } from 'react'
import { postApi } from '../../src/api'

export const useUserPinSession = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const login = async (userId, pin) => {
        setLoading(true)
        setIsError(false)

        try {
            const user = await postApi('/session/login/pin', {userId, pin})
            localStorage.addItem('admin')
            setData(user)
            
        } catch {
            setIsError(true)
        } finally {
            setLoading(false)
        }
        
    }
    
    const logout = async () => {
        localStorage.remove('admin')
        navigate("/avatar");
    }


    return {loading, data, isError, login, logout}
}