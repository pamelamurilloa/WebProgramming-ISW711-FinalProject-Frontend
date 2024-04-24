import {restUrl} from '../../constants'

export const useUpdateKid = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const updateKid = async (kid) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/kids/${kid._id}`, 
            {
                method: 'PATCH',
                body: kid
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const kidUpdated = await res.json()
            setData(kidUpdated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, updateKid}
}
