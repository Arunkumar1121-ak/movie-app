import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { watchListcontext } from '../context/WatchListcontext'

const Navbar = () => {
  const {Watchlist} = useContext(watchListcontext);
  return (
  <nav className='bg-gray-900 z-10 text-white p-4 flex justify-between fixed w-full top-0'>
    <Link to="/" className='text-xl font-bold' >Movie App</Link>
      <Link to="/watchlist" className='text-xl' >Watchlist({Watchlist.length})</Link>
    </nav>
  )
}

export default Navbar