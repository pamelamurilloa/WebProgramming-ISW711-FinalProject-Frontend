import {restUrl} from '../../constants'
import {useState} from 'react'
import { postApi } from '../../src/api'

export const useCreateVideo = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const createVideo = async (playlistId, video) => {
        setLoading(true)

        try {
            const videoCreated = await postApi(`/playlists/${playlistId}`, video)
            setData(videoCreated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, createVideo}
}
