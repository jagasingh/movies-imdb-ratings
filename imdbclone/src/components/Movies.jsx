import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchlist ,handleRemoveFromwatchlist , watchlist }) {
   const[movies , setMovies]= useState([])
   const[pageNo , setPageNo] = useState(2)

   const handleprev = () => {
    if(pageNo===1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  
   }
   const handleNext = () => {
   
    setPageNo(pageNo+1)
   }


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=177574cf5aaf4e184b951a8694466400&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="text-2xl m-3 font-bold text-center p-7">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
       
      {movies.map((movieObj)=>{
        return<Moviecard key={movieObj.id} movieObj={movieObj}  poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromwatchlist={handleRemoveFromwatchlist} watchlist={watchlist}/>

      })}
        <Pagination pageNo={pageNo} handleNext={handleNext} handleprev={handleprev} />
    
      </div>
    </div>
  );
}

export default Movies;
 //poster_path={movieObj.poster_path}