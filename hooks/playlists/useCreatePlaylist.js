import { postApi } from '../../src/api'
import {useState} from 'react'

const restUrl = require('../../constants')

export const useCreatePlaylist = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const createPlaylist = async (playlist) => {
        setLoading(true)

        try {
            const playlistCreated = await postApi('/playlists', playlist)
            setData(playlistCreated)
            
        } catch {
            setIsError(true);
        } finally {
            setLoading(false)
        }
        
    }

    return {loading, data, isError, createPlaylist}
}
