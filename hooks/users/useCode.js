import { useState } from 'react'
import {restUrl} from '../../constants'

export const useCode = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const verifyCode = async (userId, code) => {
        setLoading(true)
        setIsError(false)

        const res = await fetch(
            restUrl + "/session/login/code", 
            {
                method: 'POST',
                body: {userId, code}
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

    return {loading, data, isError, verifyCode}
}
