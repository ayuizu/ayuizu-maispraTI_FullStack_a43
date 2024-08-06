
import { Navigate } from "react-router-dom"
import { AuthContext } from "./Authentication"
import { useContext } from "react"

function ProtectedRoute({children}){
    // const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const context = useContext(AuthContext)
    const isLogged = context.isLoggedIn
    // if(!{context.isLoggedIn}){
        if(!isLogged){
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute
