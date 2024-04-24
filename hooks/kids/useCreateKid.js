const restUrl = require('../../constants')

export const useCreateKid = () => {
    const [loading, setLoading] = useState('')
    const [data, setData] = useState('')
    const [isError, setIsError] = useState('')

    const createKid = async (kid) => {
        setLoading(true)

        const res = await fetch(
            restUrl + "/kids", 
            {
                method: 'POST',
                body: kid
            }
        )

        setLoading(false)
    
        if (res.status === 201) {
            const kidCreated = await res.json()
            setData(kidCreated)
            
        } else {
            setIsError(true);
        }
        
    }

    return {loading, data, isError, createKid}
}
