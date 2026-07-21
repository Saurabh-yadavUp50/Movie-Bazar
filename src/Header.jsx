import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";


const Header = ({ input, setInput,Genre,setGenre }) => {

  
  const HandleGenre = (e) => {
    setGenre(e.target.value);
  }
const HandleSearch =(e)=>{
  //  setInput(e.target.value)
   console.log(input)
}
 


  return (
    <div className='w-full flex md:items-center  md:p-4 md:h-16 fixed z-20  h-32 md:flex-row flex-col bg-blue-950 justify-between  text-white '>
      <div className="logo flex md:mt-0 ml-4  items-center mt-4 gap-0.5" >
        <h1 className='text-2xl'>Movie</h1><span className='text-blue-600  text-3xl'>Bazar</span>
      </div>

      <div className="search text-white flex items-center ml-46  md:mt-0 -mt-10">
        <input className='md:h-8 h-10 w-36 md:w-56 outline-0 border-1 border-blue-600 rounded-bl-lg rounded-tl-lg md:p-2  p-2 text-sm  text-white' type='text' placeholder='Search your Movie'
        
        value={input}  onChange={(e) => setInput(e.target.value)} ></input>
        <button className='md:h-8 md:w-8 h-10 w-10  bg-blue-600 rounded-r-lg ' onClick={HandleSearch}><IoSearchOutline className='md:ml-1 ml-2 md:text-lg text-xl'  /></button>
      </div>

      <div className='md:mr-28 ml-10 mb-8 md:mb-0 '>
        <select className='border-1 border-blue-600  rounded-md md:px-2 py-2 outline-none focus:ring-1  focus:ring-blue-400'
          onChange={HandleGenre} defaultValue={"Select Genre"}>
   <option className='bg-blue-950' >Genre</option>
  <option  className='bg-blue-950 text-white' value="28">Action</option>
  <option className='bg-blue-950 text-white' value="16">Animation</option>
  <option className='bg-blue-950 text-white'  value="12">Adventure</option>
  <option className='bg-blue-950 text-white' value="35">Comedy</option>
  <option className='bg-blue-950 text-white' value="80">Crime</option>
  <option className='bg-blue-950 text-white' value="99">Documentary</option>
  <option className='bg-blue-950 text-white' value="18">Drama</option>
  <option className='bg-blue-950 text-white' value="14">Fantasy</option>
  <option className='bg-blue-950 text-white' value="10751">Family</option>
  <option className='bg-blue-950 text-white' value="36">History</option>
  <option className='bg-blue-950 text-white' value="27">Horror</option>
  <option className='bg-blue-950 text-white' value="10402">Music</option>
  <option className='bg-blue-950 text-white' value="9648">Mystery</option>
  <option className='bg-blue-950 text-white' value="10749">Romance</option>
  <option className='bg-blue-950 text-white' value="878">Science Fiction</option>
  <option className='bg-blue-950 text-white' value="10770">TV Movie</option>
  <option className='bg-blue-950 text-white' value="53">Thriller</option>
  <option className='bg-blue-950 text-white' value="10752">War</option>
  <option className='bg-blue-950 text-white' value="37">Western</option>
        </select>
      </div>
    </div>

  )
}

export default Header