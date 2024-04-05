import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard/MovieCard'
import Form from 'react-bootstrap/Form';
import ProductListPage from './ProductList/ProductListPage';



// CREATE A FUNCTION FOR FETCHING THE MOVIE DATA


const AllMovies = () => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");

  // CREATING A STATE THAT MANAGES ALL MOVIES

  const [ProjectObj, setProjectObj] = useState({});

  // SET TO TOGGLE BETWEEN THE MOVIE CARD TO SINGLE PAGE

  const [singleProduct, setSingleProduct] = useState(false);

  console.log(search);

  // HANDLECLICK FUNCTION FOR HANDLING THE MOVIE CARD
  
  const handleClick = (id) => {

    // Find the movie object with the matching ID
    const selectedMovie = movieData.find(movie => movie.id === id);

    // Set the selected movie object as projectObj
    setProjectObj(selectedMovie);

    // Set Single Product to true 
    setSingleProduct(true);
  };
  console.log("single movie", ProjectObj);


  //FETCH MOVIE FROM LOCAL STORAGE//

  const FetchMovie = () => {

    let movies = JSON.parse(localStorage.getItem("movies") || []);
    return movies;

  }


  // USEFFECT FOR FETCHING THE DATA FROM THE LOCAL STORAGE TO CHA

  useEffect(() => {
    // const Data = FetchMovie();
    setMovieData(FetchMovie());
    // setMovieData(Data);
  }, [])

  console.log(movieData);

  //

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

      <div>
        {!singleProduct ? (<div className='grid xl:grid-cols-4 gap-[2rem] xl:px-[1rem] xl:py-[1rem] xl:mr-[4rem] '>

          {/* // USING FILTER TO FIND MOVIE NAME */}

          {movieData.filter((movies) => {
            return search.toLowerCase() === "" ? movies :
              movies.title.toLowerCase().includes(search);

          }).map((movies, id) => (

            <MovieCard
              key={id}
              title={movies.title}
              description={movies.description}
              posterUrl={movies.posterUrl}
              rating={movies.rating}
              func={() =>
                handleClick(movies.id)
              }

            />
          ))}

        </div>) : (<ProductListPage
          ProductPrevPage={ProjectObj}

          // TOGGLE FROM SINGLE PAGE TO ALL MOVIE PAGE

          toggleScreen={setSingleProduct} />)}
      </div>


    </div>
  )
}

export default AllMovies
