import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/axios";
import Topnav from "./Templates/Topnav";
import Loading from "./Loading";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";

const Tvshows = () => {
    document.title = " Stream-Verse | TV Shows";
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
  
  
    const GetTv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}`,{
          params: { page }
        });
  
  
        settv((prevState) => [...prevState, ...data.results]);
  
        if (data.results.length === 0) {
          setHasMore(false);
        } else {
          setPage((prevPage) => prevPage + 1);
        }
  
      } catch (error) {
        console.log('Error: ', error);
      }
    };
  
    useEffect(() => {
      settv([]); // Reset tv when category or duration changes
      setPage(1);
      setHasMore(true); // Reset hasMore when category or duration changes
      GetTv();
    }, [category]);


  return tv.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='px-[5%] w-full flex items-center justify-between'>
        <h1 className='text-2xl text-zinc-400 font-semibold'>
          <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line'></i>
           Tv Shows <small className=" ml-2 text-sm text-zinc-600">({category})</small> 
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav/>
          <Dropdown
            title='Category'
            options={['popular' , 
            'on_the_air' ,
             'top_rated' ,
              'airing_today' ]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className='w-[2%]'></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows