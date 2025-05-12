import Watchlist from "./Watchlist";

function Moviecard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromwatchlist,
  watchlist
}) {
  function doescontain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="relative h-[50vh] w-[190px] bg-center bg-cover py-5 rounded-xl hover:scale-110 duration-200 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doescontain(movieObj) ? (
        <div
          onClick={() =>handleRemoveFromwatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center bg-grey-400 rounded-lg  absolute top-2 right-2 text-2xl z-10 absolute top-2 right-2 bg-black bg-opacity-70 p-1 rounded-full text-xl z-10 shadow-md"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center bg-grey-400 rounded-lg  absolute top-2 right-2 text-2xl z-10 absolute top-2 right-2 bg-black bg-opacity-70 p-1 rounded-full text-xl z-10 shadow-md"
        >
          &#128525;
        </div>
      )}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2 rounded-b-xl text-sm font-semibold">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
//https://api.themoviedb.org/3/movie/popular?api_key=177574cf5aaf4e184b951a8694466400&language=en-US&page=1
//"url(https://i.redd.it/dryvtbe2d8iy.jpg)"
