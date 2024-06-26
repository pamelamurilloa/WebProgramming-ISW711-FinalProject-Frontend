import { useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom';

// Local imports
import { postApi } from '@src/api'

export const useKidPinSession = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const login = async (_id, pin) => {
        setLoading(true)
        setIsError(false)

        try {
            const kid = await postApi('/session/kids', {_id, pin})
            localStorage.setItem('kid', JSON.stringify(kid))
            setData(kid)

        } catch (err) {
            console.error(err)
            setIsError(true)
        } finally {
            setLoading(false)
        }
        
    }

    const logout = async () => {
        localStorage.removeItem('kid')
        navigate("/avatar");
    }

    return {loading, data, isError, login, logout}
}