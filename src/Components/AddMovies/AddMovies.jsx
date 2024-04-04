import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image01 from "./../../assets/undraw_transfer_files_re_a2a9.svg"

const AddMovies = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  // FUNCTION FOR CLEAR FIELD
  const clearField = () => {

    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating("");

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    const newMovies = {
      id: movies.length + 1,
      // id: 1,
      title: title,
      description: description,
      posterUrl: posterUrl,
      rating: rating,
    }

    console.log(newMovies);

    //1.  GET LOCAL localStorage
    // 2. CHECK IF LOCAL STORAGE IS EMPTY, if it, then create AN EMPTY ARRAY

    // let movies = JSON.parse(localStorage.getItem("movies")) || [];

    //3.  ADD NEW MOVIE TO THE ARRAY

    movies.push(newMovies);

    //4.  SAVE MOVIE ARRAY INTO LOCAL STORAGE USING A METHOD

    localStorage.setItem('movies', JSON.stringify(movies));


    // CLEAR FIELD  AFTER SUBMISSION

    clearField();

  };

  return (


    <div className='flex justify-center mt-4'>
      <div className='w-[58rem] flex xl:flex-row justify-center items-start gap-[4rem] sm:flex-col flex-col  mt-10'>
        <div className=' w-[400px] ml-[2rem] mt-[2rem] p-[1rem]'>
          <h1 className='uppercase font-bold text-sm text-black w-[200px]'>This is the Add Movie component</h1>
          <img className='w-[350px]' src={Image01} alt='file transfer illustration' />
        </div>
        <Form className='xl:w-[28rem] w-[350px] ml-[2.5rem] xl:ml-0' onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="Movie Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="PosterUrl">
            <Form.Label>PosterUrl</Form.Label>
            <Form.Control type="text" placeholder="Enter PosterUrl" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="Number" placeholder="Enter Movie Rating (0 - 10)" value={rating} onChange={(e) => setRating(e.target.value)} />
          </Form.Group>
          <Button type="submit" className='xl:w-[28rem] w-[22rem] mt-[3rem] bg-blue-500'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddMovies
