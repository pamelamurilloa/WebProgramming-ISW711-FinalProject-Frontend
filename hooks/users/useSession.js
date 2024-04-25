import { useState } from 'react'
import { postApi } from '../../src/api'
import {useAuth} from '../../src/contexts/authContext'

export const useSession = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const {setUser} = useAuth()

    const login = async (email, password) => {
        setLoading(true)
        setIsError(false)

        try {
            const user = await postApi('/session/login', {email, password})
            setData(user)
            
        } catch {
            setIsError(true)
        } finally {
            setLoading(false)
        }
        
    }

    const logout = async () => {
        localStorage.remove('user')
        setUser(null)
    }

    const partialLogout = async () => {
        localStorage.remove('admin')
        setAdmin(null)
    }

    return {loading, data, isError, login, logout, partialLogout}
}
