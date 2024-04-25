import { useState } from 'react'
import { postApi } from '../../src/api'

export const useKidPinSession = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const login = async (childId, pin) => {
        setLoading(true)
        setIsError(false)

        try {
            const kid = await postApi('/session/kids', {childId, pin})
            localStorage.addItem('kid')
            setData(kid)
            
        } catch {
            setIsError(true)
        } finally {
            setLoading(false)
        }
        
    }

    const logout = async () => {
        localStorage.remove('kid')
        navigate("/avatar");
    }

    return {loading, data, isError, login, logout}
}