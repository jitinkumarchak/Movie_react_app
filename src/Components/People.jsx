import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/axios";
import Topnav from "./Templates/Topnav";
import Loading from "./Loading";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";

const People = () => {
    document.title = " Stream-Verse | person ";
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
  
  
    const GetPerson = async () => {
      try {
        const { data } = await axios.get(`/person/${category}`,{
          params: { page }
        });
  
  
        setperson((prevState) => [...prevState, ...data.results]);
  
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
      setperson([]); // Reset person when category or duration changes
      setPage(1);
      setHasMore(true); // Reset hasMore when category or duration changes
      GetPerson();
    }, [category]);


  return person.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='px-[5%] w-full flex items-center justify-between'>
        <h1 className='text-2xl text-zinc-400 font-semibold'>
          <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line'></i>
           People
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav/>
          <div className='w-[2%]'></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People