import { useState } from 'react'
import {restUrl} from '../../constants'

export const useRegister = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const register = async (newUser) => {
        setLoading(true)
        setIsError(false)

        const resUser = await fetch(
            restUrl + "/users/", 
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({...newUser, cellphone: newUser.formatedCellphone})
            }
        );

        setLoading(false)
    
        if (resUser.status === 201) {
            const user = await resUser.json()
            const res = await fetch (
                restUrl + "/playlists/", 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: 'POST',
                    body: JSON.stringify({name: "General", userId: user._id})
                }
            );


            setData(user)
            
        } else {
            setIsError(true);
        }

        
    }

    return {loading, data, isError, register}
}