import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard/MovieCard'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



// CREATE A FUNCTION FOR FETCHING THE MOVIE DATA


const AllMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  const handleClick = () => {
    alert("found the Movie!")
    setSearch("");
  }

  const FetchMovie = () => {


    let movies = JSON.parse(localStorage.getItem("movies") || []);
    return movies;

  }
  useEffect(() => {
    // const Data = FetchMovie();
    setMovieData(FetchMovie());
    // setMovieData(Data);
  }, [])

  console.log(movieData);

  return (
    <div>
      <h1 className='uppercase font-bold text-xl mx-[2rem] mt-[2rem] mb-[2rem]'>All movie</h1>
     
      <div className='xl:flex xl:flex-row flex-col justify-center items-center gap-[4rem] mb-[2rem]'>
        <div>
          <div>
            <Form className="d-flex xl:w-[42rem] w-[350px] ml-[1.5rem] " >
              <Form.Control onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success" onClick={handleClick}>Search</Button> */}
            </Form>
          </div>
        </div>
      </div>

      {/* // STYLING THE MOVIE CARD */}

      <div className='grid xl:grid-cols-4 gap-[2rem] xl:px-[1rem] xl:py-[1rem] xl:mr-[4rem] '>

        {movieData.filter((movies) => {
          return search.toLowerCase() === "" ? movies :
            movies.title.toLowerCase().includes(search);

        }).map((movies, index) => (

          <MovieCard
            key={index}
            title={movies.title}
            description={movies.description}
            posterUrl={movies.posterUrl}
            rating={movies.rating}

          />
        ))}

      </div>
    </div>
  )
}

export default AllMovies
