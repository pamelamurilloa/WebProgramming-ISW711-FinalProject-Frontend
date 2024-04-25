import { useState } from 'react'
import {postApi} from '../../src/api'

export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const register = async (newUser) => {
        setLoading(true)
        setIsError(false)

        try {

            const user = await postApi('/users', {...newUser, cellphone: newUser.formatedCellphone});
            const playlist = await postApi('/playlists', {name: "General", userId: user._id});
        
            setData(user)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
    }

    return {loading, data, isError, register}
}