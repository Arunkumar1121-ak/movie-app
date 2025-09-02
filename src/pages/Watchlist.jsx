import React, { useContext, useState } from 'react'
import Genrefilter from '../components/Genrefilter'
import Moviecard from '../components/Moviecard'
import { watchListcontext } from '../context/WatchListcontext'

const Watchlist = () => {
  const { Watchlist, genrelist } = useContext(watchListcontext)
  const [search, setSearch] = useState("")
  const [selectedgenre, setselectedgenre]= useState("");


  const filteredMovies = Watchlist
  .filter((movie) => 
    movie.title && movie.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((movie) => 
    !selectedgenre || movie.genre_ids.includes(Number(selectedgenre))
  );


  return (
    <div className='p-4 pt-16'><input type="text" placeholder='Search movies...' className="p-2 w-3/4 md:w-1/2 border border-gray-700 rounded-md 
                   bg-gray-900 z-10 bg-opacity-60 backdrop-blur-md text-white 
                   fixed top-16 left-1/2 transform -translate-x-1/2" onChange={(e) => setSearch(e.target.value)} />

      <div className='mt-16  flex justify-center '> <Genrefilter genrelist={genrelist}  setselectedgenre={setselectedgenre} selectedgenre={selectedgenre} /> </div>
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {filteredMovies.map(movie => {
          return (
            <Moviecard key={movie.id}
              movie={movie} />
          )
        })}

      </div>
    </div>
  )
}

export default Watchlist