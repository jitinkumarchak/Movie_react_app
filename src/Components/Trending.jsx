import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../Utils/axios';
import Cards from './Templates/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`, {
        params: { page }
      });

      setTrending((prevState) => [...prevState, ...data.results]);

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }

      console.log(data);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    setTrending([]); // Reset trending when category or duration changes
    setPage(1);
    setHasMore(true); // Reset hasMore when category or duration changes
    GetTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className='w-screen h-screen'>
      <div className='px-[5%] w-full flex items-center justify-between'>
        <h1 className='text-2xl text-zinc-400 font-semibold'>
          <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line'></i> Trending
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav />
          <Dropdown
            title='Category'
            options={['movie', 'tv', 'all']}
            func={(e) => setCategory(e.target.value)}
          />
          <div className='w-[2%]'></div>
          <Dropdown
            title='Duration'
            options={['week', 'day', 'month']}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
