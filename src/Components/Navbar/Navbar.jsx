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

  }
  const HandleToggle = () => {
    setToggle(!toggle);
  }



  return (

    <div className="relative">

      <div className='flex justify-end items-center px-[1rem] bg-slate-500 p-[6px] h-[3.2rem] gap-[3rem]'>

        <div className='mr-[9rem]'><h1 className='text-white font-bold text-lg cursor-pointer'>MOVIE APP</h1></div>
        <div className='xl:flex-row sm:flex-col gap-[1rem] sm:hidden xl:block hidden'>
          {/* <h1 className='font-bold text-white mt-[0.4rem] cursor-pointer'>Home</h1> */}
          <button className='text-white border shadow-2xl px-[8px] py-[4px] cursor-pointer mr-[1rem]' onClick={handleClick}>ALL MOVIE</button>
          <button className='text-white border shadow-2xl px-[8px] py-[4px] cursor-pointer' onClick={handleClick}>ADD MOVIE</button>
        </div>
        <div className="xl:hidden sm:d-block md:d-block">
          {!toggle ?

            (<button onClick={HandleToggle}><img className='ml-[2rem] w-[2rem]' src={Image001} alt='Burger' /></button>)
            :
            (<div className='border w-[16rem] absolute top-[4rem] right-[4rem] h-[14rem] bg-white shadow-2xl '>
              <div className=" bg-green-500">
                <marquee direction="right">This is the modal version</marquee>
              </div>
              <div className='ml-[13rem] border cursor-pointer w-[2rem] h-[2rem] rounded-[50%] border-primary-500 mt-[0.6rem] shadow-2xl' onClick={HandleToggle}>
                <img className='w-[2rem] ' src={Image002} alt='close button' />
              </div>
              <div className='flex flex-col gap-[1rem]  ml-[3rem] w-[12rem] mt-1'>
                <h1 className='font-bold text-black mt-[0.4rem] cursor-pointer w-[10rem] text-center'>Home</h1>
                <button className='text-black border shadow-2xl px-[8px] py-[4px] cursor-pointer mr-[1rem] w-[10rem] font-bold' onClick={handleClick}>ALL MOVIE</button>
                <button className='text-black border shadow-2xl px-[8px] py-[4px] cursor-pointer w-[10rem] font-bold' onClick={handleClick}>ADD MOVIE</button>
              </div>
            </div>)}
        </div>

      </div>
      {!showMovie ? (<AddMovies />) : (<AllMovies />)}

    </div>
  )
}

export default Navbar
