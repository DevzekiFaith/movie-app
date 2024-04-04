import { useState } from "react"
import PropTypes from "prop-types"
import React from 'react'
import ProductListPage from "../ProductList/ProductListPage"


const MovieCard = ({ title, description, posterUrl, rating, func }) => {

  const [openCard, setOpenCard] = useState(false)




  return (


    <div className="w-[100%]" onClick={func}>
      <div>
         <div className='xl:w-[300px] w-[350px]  xl:h-[530px] p-[1rem] border shadow-lg ml-[1rem] hover:bg-orange-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer '>
          <div className="hover:translate-y-3">
            <img className='w-[100%]' src={posterUrl || "https://tinyurl.com/4d5cn9vu"} placeholder="blur" alt='movie poster' />
          </div>
          <h4 className="mt-[1.2rem]">{title}</h4>
          <p className="py-[0.6rem]">{description}</p>
          <h4 className="text-sm">Rating: {rating}</h4>
        </div> 

      </div>

    </div>
  )
}

MovieCard.propTypes = {
  description: PropTypes.string,
  posterUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  func : PropTypes.string,
}


export default MovieCard
