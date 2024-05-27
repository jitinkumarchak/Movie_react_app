import React, { useEffect, useState } from 'react'
import Sidenav from "./Templates/Sidenav";
import Topnav from './Templates/Topnav';
import axios from '../Utils/axios';
import Header from './Templates/Header';
import Horizontalcard from './Templates/Horizontalcard';
import Dropdown from './Templates/Dropdown';
import Loading from './Loading';


const Home = () => {
  Document.title = "home";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")

  const getHeaderWallpaper = async () => {
   
    try {
      const { data } = await axios.get(`/trending/all/day`);
      
      let randomdata = 
        data.results[(Math.random()*data.results.length).toFixed()];

      setwallpaper(randomdata);
    } catch (error) { 
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
   
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      
      settrending(data.results);

    } catch (error) { 
      console.log("Error: ", error);
    }
  };
 


  useEffect(() => {
    GetTrending();
    !wallpaper && getHeaderWallpaper();
     
}, [category]);



    
  return wallpaper && trending ? (
    <>
        <Sidenav/>
        <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
            <Topnav/>
            <Header data={wallpaper}/>
            <div className=' flex justify-between p-5'>
        <h1 className='text-3xl font-semibold text-zinc-400'>
            Trending
        </h1>

         <Dropdown 
         title="Filter" 
         options={["tv", "movie", "all"]} 
         func={(e) => setcategory(e.target.value)} 
         />

       </div>
            <Horizontalcard data = {trending} />
        </div>
    </>
  ): <Loading/>;
}

export default Home