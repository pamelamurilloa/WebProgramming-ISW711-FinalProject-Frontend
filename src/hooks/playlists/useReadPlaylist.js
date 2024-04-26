import { getApi } from '@src/api'
import {restUrl, graphqlUrl} from '@src/constants'
import {useState} from 'react'

export const useReadPlaylist = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)

    const readPlaylists = async (user_id) => {
        setLoading(true)

        try {
            const playlists = await getApi(`/playlists/user/${user_id}`)
            setData(playlists)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, readPlaylists}
}