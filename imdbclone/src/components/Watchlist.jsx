import React, { use, useEffect, useState } from 'react';
import genreids from '../utility/Genre'



function Watchlist({watchlist , setwatchlist , handleRemoveFromwatchlist}) {
  const [search , setSearch]= useState('')
  const [genreList , setGenreList]= useState(['All Genres'])
  const [currGenre , setCurrGenre] = useState("All Genres")
  let handlesearch = (e)=>{
    setSearch(e.target.value)

  }
  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }
  let sortincreasing = ()=>{
    let sortedincreasing = watchlist.sort((movieA , movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
   setwatchlist([...sortedincreasing])
  }
  let sortdecreasing = ()=>{
   let sorteddecreasing =  watchlist.sort((movieA , movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setwatchlist([...sorteddecreasing])
  }
  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres' , ...temp])
    console.log(temp)
  }, [watchlist])
  

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-stone-600 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}

       
      </div>
      <div className="flex justify-center  p-4">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          placeholder="search movies"
          className="h-[3rem] w-[18rem] bg-grey-200 p-2 border rounded"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8 ">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex justify-center">
                <div className="p2 hover:scale-110 " onClick={sortincreasing}>
                  🔼
                </div>
                <div className="p2">
                  <th>Ratings</th>
                </div>
                <div className="p2 hover:scale-110 " onClick={sortdecreasing}>
                  🔽
                </div>
              </div>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if (currGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movieObj.vote_average}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movieObj.popularity}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>
                    <td onClick={()=>handleRemoveFromwatchlist(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
