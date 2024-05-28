import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Horizontalcard = ({data}) => {
  return (
   
        <div className="w-full flex  overflow-y-hidden mb-5 p-5">  
           
           {data.map((d,i) => (
            <Link to={`/${d.media_type}/details/${d.id}`} className='min-w-[15%] bg-zinc-900 mr-5 mb-5 '>
                <img 
                className='w-full h-[45%]  object-cover'
                src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}
                           )`} alt="" />

          <div className='text-white p-3 h-[45%]'>

             <h1 className='text-xl font-semibold '>
                {
                d.name ||
                d.title ||
                d.original_name||
                d.original_title
                    }
            </h1>

        <p className=''>
            {d.overview.slice(0,50)}...
           
        <span className='text-zinc-500'>More</span>
         </p>
                           </div>

            
                
            </Link>
           ))}


        </div>
  )
}

export default Horizontalcard