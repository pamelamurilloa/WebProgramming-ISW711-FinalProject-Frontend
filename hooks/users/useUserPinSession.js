import { useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom';

// Local imports
import { postApi } from '../../src/api'

export const useUserPinSession = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const login = async (userId, pin) => {
        setLoading(true)
        setIsError(false)

        try {
            const user = await postApi('/session/login/pin', {userId, pin})
            localStorage.setItem('admin', 'true')
            setData(user)
            
        } catch (err) {
            console.log(err)
            setIsError(true)
        } finally {
            setLoading(false)
        }
        
    }
    
    const logout = async () => {
        localStorage.removeItem('admin')
        navigate("/avatar");
    }


    return {loading, data, isError, login, logout}
}