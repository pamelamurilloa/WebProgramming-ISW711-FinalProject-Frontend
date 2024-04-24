const restUrl = require('../../constants')

export const useDeleteKid = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const deleteKid = async (kidId) => {
        setLoading(true)

        const res = await fetch(
            restUrl + `/kids/${kidId}`, 
            {
                method: 'DELETE',
            }
        )

        setLoading(false)
    
        if (res.status === 200) {
            const kidDeleted = await res.json()
            setData(kidDeleted)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, deleteKid}
}