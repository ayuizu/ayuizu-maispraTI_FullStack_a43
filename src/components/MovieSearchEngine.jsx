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

const MoviesContainer = styled.div`
    color: #333;
    border: 1px gray solid;
    text-align: center;

`
const MovieCard = styled.div`
    text-align: center;
    justify-content: center;
    display: grid;
    grid-template-column: repeat(3, 1fr)
`
const Button = styled.button`
    background-color: #777;
`

const MovieSearchEngine = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const searchMovies = async () =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM0YTVkYjQzNmZkM2U5Nzk2NjIzMWMyYWRjODcxMyIsIm5iZiI6MTcyMjU0NzUyNi4yOTI4NzUsInN1YiI6IjY2YWJmYzMzNWI3NDQ4YWY4MDQ0YWU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aiww0TIZPZjunrxNft2zXQ-rHZEkww_A_1S5bojhM7c'
            }
          };
          
          fetch('https://api.themoviedb.org/3/configuration', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        // try{
        //     const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=bbab0da7`) //Colocar KEY aqui no final. Outra API: TMDB
        //     setMovies(response.data.Search)
        //     console.log(response.data.Search)

        // } catch(error) {
        //     console.error("Erro: ". error)
        // }
    }

    return(
        <Container>
            <Title>Movie Search</Title>
            <Input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}></Input>
            <Button onClick={searchMovies}>Search</Button>
            <MoviesContainer>
            {movies && movies.map((movie)=>(
                <MovieCard key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} /> 
                    <h3>{movie.Title}</h3> 
                    <p>{movie.Director}</p>
                </MovieCard>
            ))}
            </MoviesContainer>
        </Container>
    )
}

export default MovieSearchEngine