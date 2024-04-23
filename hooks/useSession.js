import { useState } from 'react'
import {restUrl} from '../constants'

export const useSession = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const login = async (email, password) => {
        setLoading(true)

        const res = await fetch(
            restUrl + "/session/login", 
            {
                method: 'POST',
                body: {email, password}
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            user = await res.json()
            setData(user)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, login}
}
