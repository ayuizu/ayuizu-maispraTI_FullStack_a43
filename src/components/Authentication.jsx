import {useState, createContext, useContext} from 'react'

//Criação do contexto AuthContext
export const AuthContext = createContext();

//Criação do provedor de contexto AuthProvider - armazena o estado de autenticação do usuário.
export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {props.children}
        </AuthContext.Provider>
    )
}

//"Hook" auxiliar
export const useAuth = () =>{
    return useContext(AuthContext)
}
