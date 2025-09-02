import React from 'react'

const Genrefilter = ({genrelist,setselectedgenre}) => {
  return (
    <div>
      <select name="" id="" className='p-2 bg-gray-900 opacity-60 backdrop-blur-md text-white border rounded mb-4' onChange={(e)=>setselectedgenre(e.target.value)} >
        <option value="">All Genres</option>
           { genrelist.map((genre) => {
              return(
                <option key = {genre.id} value = {genre.id}>{genre.name}</option>
              )
            })}
      </select>
    </div>
  )
}

export default Genrefilter