import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: top;
    width: 100%;

`
const Li = styled.li`
    padding: 5px;
    margin: 1px;
    list-style: none;
    background-color: #CBC3E3;
`
function Navigation(){
    return(
        <Nav>
            <Ul>
                <Li><Link to='/'>Home</Link></Li>
                <Li><Link to='/login'>Login</Link></Li>
                <Li><Link to='/translator'>Language Translator</Link></Li>
                <Li><Link to='/QRCode'>QR Code Generator</Link></Li>
                <Li><Link to='/IPAdress'>IP Address Finder</Link></Li>

            </Ul>
        </Nav>
    )
}

export default Navigation