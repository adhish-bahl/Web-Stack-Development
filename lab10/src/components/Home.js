import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Movie from './Movie';
import Loader from './Loader';

function Home() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")

    const searchmovie = async () => {
        setLoader(true)
        setError("")
        let ran, i = 1;
        let tempArray = []
        do {
            await axios.get(`https://www.omdbapi.com/?apikey=c08cbdd&s=${title}&y=${year}&type=${type}&page=${i}`)
            .then((res) => {
                if(res.data.Response === "True"){
                    ran = Math.ceil(res.data.totalResults/10)
                    tempArray.push(...res.data.Search)
                }
                else if(res.data.Response === "False") {
                    if(res.data.Error === "Too many results.") {
                        setError("Too many results, Please Specify more!")
                    }
                    else if(res.data.Error === "Movie not found!") {
                        setError("No movie with that title found!")
                    }
                    else if(res.data.Error === "Series not found!") {
                        setError("No Series with that title found!")
                    }
                    else if(res.data.Error === "Incorrect IMDb ID.") {
                        setError("No input given, please provide a Title!")
                    }
                    else {
                        setError("Some Error occurred, please check your input!")
                    }
                }
            })
            .catch((err) => console.log("Error Found: ", err))
            i++
        }while(i <= ran);
        setData(tempArray)
        setLoader(false)
    }

  return (
    <div className='my-5'>
        <h2>Search By Title:</h2>
        <div className='m-5 d-flex justify-content-end align-items-center'>
            <FloatingLabel className='mx-3' controlId="floatingInput" label="Movie Title(Required)" >
                <Form.Control type="text" placeholder="Movie Title(Required)" value={title} onChange={e => setTitle(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel className='mx-3' controlId="floatingYear" label="Year">
                <Form.Control type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)}/>
            </FloatingLabel>
            <Form.Select aria-label="Default select" className='mx-3' style={{height: "3.5rem", width: "fit-content"}} value={type} onChange={e => setType(e.target.value)}>
                <option value="">Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </Form.Select> 
            <Button variant="dark" type="button" style={{height: "2.5rem"}} className='px-4 mx-3' onClick={searchmovie}>
                Search
            </Button>
        </div>
        <Container className="d-flex justify-content-center align-items-center flex-wrap">
            {loader?<Loader />:error===""?
                data.map((movie) => (<Movie key={movie.imdbID} title={movie.Title} year={movie.Year} imgSrc={movie.Poster} type={movie.Type} />)):<h2>{error}</h2>
            }
        </Container>
    </div>
  )
}

export default Home
