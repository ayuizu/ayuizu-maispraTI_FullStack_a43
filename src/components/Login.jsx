import { useState, useContext } from "react"
import styled from 'styled-components'
import { AuthContext, useAuth } from "./Authentication"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    color: #333;
    text-align: center;
`

const Input = styled.input`
    color: #555;
`
const Button = styled.button`
    background-color: #777;
`

const Success = styled.p`
    color: green;
`

const Failed = styled.p`
    color: red;
`

const Login = () =>{
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const {setIsLoggedIn} = useContext(AuthContext)

    const handleSubmit = () =>{
        if(user == "admin" && password == "12345"){
            console.log("Logged in")
            setIsLoggedIn(true)
            navigate('/')
        }
        else{
            console.log("Error")
            setError(false)
        }
    }

    return(
        <Container>
            <Title>Login</Title>
            <p>User: </p>
            <Input type="text" value={user} onChange={(e)=>setUser(e.target.value)}></Input>
            <p>Password: </p>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
            <Button onClick={handleSubmit}>Login</Button>
            {error && <Failed>User or password is incorrect</Failed>}
  
        </Container>
    )
}

export default Login
