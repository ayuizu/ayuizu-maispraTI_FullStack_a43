import { useState } from "react"
import styled from 'styled-components'
import QRCode from 'qrcode.react'

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
const QR = styled.div`
    background-color: #777;
`
const QRCodeGenerator = () =>{

    const [ code, setCode ] = useState('')
    const [ qr, setQr ] = useState(false)
    const generateQR = () =>{
        setQr(true)
    }

    return(
        <Container>
            <Title>QR Code Generator</Title>
            <Input type="text" value={code} onChange={(e)=>setCode(e.target.value)}></Input>
            <Button onClick={generateQR}>Generate</Button>
            {(code && qr) &&
                <QR>
                    <QRCode value={code} size={256} />
                </QR>}

        </Container>
    )
}

export default QRCodeGenerator