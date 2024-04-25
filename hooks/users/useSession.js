import { useState } from 'react'
import { postApi } from '../../src/api'
import {useAuth} from '../../src/contexts/authContext'

export const useSession = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

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
        localStorage.removeItem('user')
        setUser(null)
    }


    return {loading, data, isError, login, logout}
}
