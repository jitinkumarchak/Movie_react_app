import React from 'react'
import Sidenav from "./Templates/Sidenav";
import Topnav from './Templates/Topnav';


const Home = () => {
    
  return (
    <>
        <Sidenav/>
        <div className="w-[80%] h-full">
            <Topnav/>
        </div>
    </>
  )
}

export default Home