import axios from "../Utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Topnav from "./Templates/Topnav";
import Loading from "./Loading";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";


const Popular = () => { 
   document.title = " Stream-Verse | Popular";
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular`,{
        params: { page }
      });


      setpopular((prevState) => [...prevState, ...data.results]);

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
    setpopular([]); // Reset popular when category or duration changes
    setPage(1);
    setHasMore(true); // Reset hasMore when category or duration changes
    GetPopular();
  }, [category]);

  return popular.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='px-[5%] w-full flex items-center justify-between'>
        <h1 className='text-2xl text-zinc-400 font-semibold'>
          <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line'></i> Popular
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav />
          <Dropdown
            title='Category'
            options={['movie', 'tv']}
            func={(e) => setCategory(e.target.value)}
          />
          <div className='w-[2%]'></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular