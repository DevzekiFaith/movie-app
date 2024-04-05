import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Image003 from "./../../assets/arrow-left-circle.svg"

// PASS THE TOGGLE TO ALL MOVE AS A PROPS IN THE SINGLE PRODUCT PAGE DISPLAY 

const ProductListPage = ({ ProductPrevPage, toggleScreen }) => {

  const { title, description, posterUrl, rating } = ProductPrevPage

 
 return (
    <div className='flex justify-center items-center' >
     <div className=' '>
       
       {/* // USE AN ONCLICK EVENT AND A CALL BACK FUNCTION TO CONTROL THE TOGGLE EFFECT */}

        <div className='w-[4rem] h-[4rem] cursor-pointer shadow-2xl' onClick={() => toggleScreen(false)}>
          <img className='w-[2rem] h-[2rem]' src={Image003 } alt='React-arrow-icon' />
          <i class="bi bi-arrow-left-circle"></i>
        </div>

        <img src={posterUrl || "Add Movie Poster"} alt="movie image" />

        <h1>{title || " Add Movie Title"}</h1>

        <p>{description || "Add Movie Description"}</p>

        rating :{rating || "Add Rating or Number"}
      </div>
    </div>
  )
}

export default ProductListPage
