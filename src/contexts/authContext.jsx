import { createContext, useContext, useState} from "react"

const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    return <AuthContext.Provider value={{user, setUser}} {...props}/>
}

// Create a hook
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {throw new Error ('Hook must be called inside the Provider Scope') }
    return context
}