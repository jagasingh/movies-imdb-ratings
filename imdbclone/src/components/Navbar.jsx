import React from 'react';
import Logo from "../assets/movie-logo.jpg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px] rounded-xs' src={Logo} alt="Movie Logo" />
      <Link to="/"  className='text-blue-500 text-2xl font-bold'>Home</Link>
      <Link to="/watchlist"  className='text-blue-500 text-2xl  font-bold'>watchlist</Link>
    </div>
  );
};

export default Navbar;
