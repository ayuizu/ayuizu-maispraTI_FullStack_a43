import { useState } from "react"
import axios from 'axios'
import styled from 'styled-components'

//Container é uma div com a estilização abaixo
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
//Title é um h2 com a estilização abaixo
const Title = styled.h2`
    color: #333;
    text-align: center;
`

const Label = styled.label`
    color: #555;
`

const TranslatedText = styled.p`
    color: #333;
    border: 1px gray solid;
    text-align: center;
`

const LanguageTranslator = () => {

    const [text, setText]= useState('')
    const [translatedText, setTranslatedText]= useState('')
    const [sourceLang, setSourceLang]= useState('en')
    const [targetLang, setTargetLang]= useState('pt')

    //Padrão para função que faz requisição: assíncrono
    const translateText = async () =>{

        //! Mudar API
        try{
            const response = await axios.get('https://api.mymemory.translated.net/get',{
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                },
            })
            setTranslatedText(response.data.responseData.translatedText)
        }catch(error){
            console.error("Erro ao traduzir o texto: ", error)
        }
    }

    return(
        <Container>
            <Title>Tradutor</Title>
            <div>
                <Label>Source language:</Label>
                <select value={sourceLang} onChange={(e)=>setSourceLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Françoise</option>
                    <option value="de">Deutsche</option>
                    <option value="it">Itaniano</option>
                    <option value="pt">Português</option>
                </select>
            </div>
            <div>
                <Label>Target language:</Label>
                <select value={targetLang} onChange={(e)=>setTargetLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Françoise</option>
                    <option value="de">Deutsche</option>
                    <option value="it">Itaniano</option>
                    <option value="pt">Português</option> 
                </select>
            </div>
            <div>
                <Label></Label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type here"/>
            </div>

            <button onClick={translateText}>Translate</button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    )
}

export default LanguageTranslator