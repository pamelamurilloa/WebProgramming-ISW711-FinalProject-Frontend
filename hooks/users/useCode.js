import { useState } from 'react'
import { postApi } from '../../src/api'

export const useCode = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const verifyCode = async (userId, code) => {
        setLoading(true)
        setIsError(false)

        try {

            const user = await postApi('/session/login/code', {userId, code})
            setData(user)
            
        } catch {
            setIsError(true);

        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, verifyCode}
}
