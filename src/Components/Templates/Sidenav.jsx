import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {


  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10' >
        <h1 className='text-2xl text-white font-blod'> <i class=" text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className='text-2xl'>SCSDB</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>
                New Feeds
                </h1>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-fire-fill"></i>Trending</Link>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-bard-fill"></i>Popular</Link>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-movie-2-fill"></i>Movies</Link>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class=" mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-team-fill"></i>People</Link>
        </nav>

        <hr className= "border-none h-[1px] bg-zinc-400" />




        <nav className='flex flex-col text-zinc-400 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-2 '>
                Website Information
                </h1>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-information-fill"></i>About</Link>
               <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 '><i class="mr-2 ri-phone-fill"></i>contact</Link>
               
        </nav>



        

    </div>
  )
}

export default Sidenav