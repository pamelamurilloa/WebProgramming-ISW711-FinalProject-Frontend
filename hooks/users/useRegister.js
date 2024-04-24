import { useState } from 'react'
import {restUrl} from '../../constants'
import {postApi} from '../../src/api'

export const useRegister = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const register = async (newUser) => {
        setLoading(true)
        setIsError(false)

        try {

            const user = await postApi('/users', {...newUser, cellphone: newUser.formatedCellphone});

            setLoading(false)

            const playlist = await postApi('/playlists', {name: "General", userId: user._id});
        
            setData(user)
            
        } catch {
            setIsError(true);
        }
    }

    return {loading, data, isError, register}
}