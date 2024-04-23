import {restUrl} from '../../constants'

export const useCreatePlaylist = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const createPlaylist = async (playlist) => {
        setLoading(true)

        const res = await fetch(
            restUrl + "/playlists/", 
            {
                method: 'POST',
                body: playlist
            }
        )

        setLoading(false)
    
        if (res.status === 201) {
            const playlistCreated = await res.json()
            setData(playlistCreated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, createPlaylist}
}
