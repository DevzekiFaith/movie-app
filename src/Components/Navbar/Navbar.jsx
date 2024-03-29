import React from 'react'
import { useState } from 'react'
import AddMovies from '../AddMovies/AddMovies'
import AllMovies from "./../AllMovies"
import Image001 from "./../../assets/list (1).svg"
import Image002 from "./../../assets/x.svg"


const Navbar = () => {
  const [showMovie, setShowMovie] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setShowMovie(!showMovie);

    const Burger = () => {
      setToggle(!toggle);
    }

  }
  return (

    <div>

      <div className='flex justify-between items-center px-[4rem] bg-slate-500 p-[6px] h-[3.2rem]'>
        <div>
          <h1 className='text-white font-bold text-lg cursor-pointer'>MOVIE APP</h1>
        </div>
        <div className='flex xl:flex-row sm:flex-col gap-[1rem] '>
          <h1 className='font-bold text-white mt-[0.4rem] cursor-pointer'>Home</h1>
          <button className='text-white border shadow-2xl px-[8px] py-[4px] cursor-pointer' onClick={handleClick}>ALL MOVIE</button>
          <button className='text-white border shadow-2xl px-[8px] py-[4px] cursor-pointer' onClick={handleClick}>ADD MOVIE</button>
        </div>
      </div>
      {!showMovie ? (<AddMovies />) : (<AllMovies />)}
      {/* <div>
        {!toggle ? (<button><img className='' src={Image001} alt='Burger' /></button>) : (<button><img className='' src={Image002} alt='Burger' /></button> )}
      </div> */}
    </div>
  )
}

export default Navbar
