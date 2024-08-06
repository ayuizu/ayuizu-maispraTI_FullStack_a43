//Usar https://ipinfo.io/developers

import { useState } from "react"
import axios from 'axios'
import styled from 'styled-components'

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

const IPResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IPAdressFinder = () =>{
    const [ IP, setIP ] = useState('')
    const [ IPData, setIPData ] = useState(null)


    const findIP = async () =>{
        try{
            const response = await axios.get(`https://ipinfo.io/${IP}?token=935b5d086075b7`)
            setIPData(response.data)
        }catch(error){
            console.error("Error fetching IP address data: ", error)
        }
    }
    return(
        <Container>
            <Title>IP Address Finder</Title>
            <Input type="text" value={IP} onChange={(e)=>setIP(e.target.value)} placeholder="Enter IP address"></Input>
            <Button onClick={findIP}>Find</Button>
            
            {IPData &&
                <IPResults>
                    <p>IP: {IPData.ip}</p>
                    <p>Location: {IPData.city}, {IPData.region}, {IPData.country}</p>
                    <p>ISP: {IPData.org}</p>
                </IPResults>}

        </Container>
    )
}

export default IPAdressFinder