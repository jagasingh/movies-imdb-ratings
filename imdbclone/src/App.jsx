import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Movies from "./components/movies";
import Watchlist from "./components/Watchlist";
import Bannner from "./components/Bannner";

function App() {
 let [ watchlist , setWatchlist]=useState([])


 let handleAddtoWatchlist = (movieObj)=>{
  let newWatchlist=[...watchlist , movieObj]
  localStorage.setItem('moviesapp', JSON.stringify(newWatchlist))
  setWatchlist(newWatchlist)
  console.log(newWatchlist)
 }

let handleRemoveFromwatchlist = (movieObj)=>{
  let filteredwatchlist = watchlist.filter((movie)=>{
    return movie.id !=movieObj.id
  })
  setWatchlist(filteredwatchlist)
  localStorage.setItem('moviesapp', JSON.stringify(filteredwatchlist))

}
useEffect(() => {
  let moviesfromlocalstorage = localStorage.getItem('moviesapp');
  if (!moviesfromlocalstorage) {
    return;
  }
  setWatchlist(JSON.parse(moviesfromlocalstorage));
}, []); // ✅ Add this!

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Bannner />
                <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromwatchlist={handleRemoveFromwatchlist}/>
              </>
            }
          ></Route>
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} setwatchlist={setWatchlist} handleRemoveFromwatchlist = {handleRemoveFromwatchlist}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
