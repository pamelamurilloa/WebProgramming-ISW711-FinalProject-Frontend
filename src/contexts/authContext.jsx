import { createContext, useContext, useState, useEffect} from "react"

const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    useEffect(
        () => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } 
        },
        [user]
    )

    useEffect(
        () => {
            const userData = localStorage.getItem('user')
            if (userData) {
                setUser(JSON.parse(userData))
            }
        },
        []
    )
    return <AuthContext.Provider value={{user, setUser}} {...props}/>
}


// Create a hook
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {throw new Error ('Hook must be called inside the Provider Scope') }
    return context
}

