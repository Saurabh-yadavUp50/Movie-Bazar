import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import MoviesCard from './MoviesCard'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;



const Moviepage = ({input,setInput,Genre,setGenre}) => {
  

const [movies,setmovies]=useState([])
const [Page,setPage] =useState(1)

 const GetData =async ()=>{
 
   try {
    const searchText = input?.trim() || "";
      const response = await axios.get(
         searchText
        ?
        
        "https://api.themoviedb.org/3/search/movie":Genre
      ?
      "https://api.themoviedb.org/3/discover/movie":

        "https://api.themoviedb.org/3/trending/movie/day",
          {
    params: {
      api_key:API_KEY,
       page: Page,
      query: input, 
      with_genres:Genre,

    },
  }
      );
//       console.log("Requested Page:", Page);
// console.log(searchText)
// console.log("Response Page:", response.data.results);

      setmovies(response.data.results);
      // setmovies((prev) => [...prev, ...response.data.results]);
    }
    catch (error) {
      console.log(error);
    }
 };

 const HandlePrev=()=>{
  setPage((prev) =>Math.max(prev -1 ,1))
 }

 const HandleNext = ()=>{
  setPage((prev)=> prev +1)
  
 }
 
 useEffect(()=>{

  GetData();
 },[Page,input,Genre],);
  

  return (
<>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full md:pt-18 pt-36  p-4">
  {movies.map((item) => (
    <MoviesCard
      key={item.id}
      title ={item.title}
      rating={item.vote_average}
      posterimg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
     
    />
  ))}
  
</div>


<div className='h-16 w-full flex justify-between bg-blue-950 pl-4 pr-4 items-center'>
    <button className='md:mr-20 md:ml-20 h-10 w-24 bg-blue-500 text-lg rounded-xl text-white '
     onClick={HandlePrev}>Previous</button>
    <button className='md:mr-20 md:ml-20 h-10 w-24 bg-blue-500 text-lg rounded-xl text-white '
     onClick={HandleNext}>Next</button>
  </div>
</>
 


  )
}

export default Moviepage