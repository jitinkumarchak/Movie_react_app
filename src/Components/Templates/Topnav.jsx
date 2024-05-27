import axios from '../../Utils/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noimage from "/default_img.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    if (query.trim() === "") {
      setSearches([]);
      return;
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className='w-[80%] h-[10vh] relative flex mx-auto items-center ]'>
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className='text-white w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent'
        type="text"
        placeholder='Search anything'
      />
      {query.length > 0 && (
        <i onClick={() => setQuery("")} className=" text-zinc-400 text-3xl ri-close-fill"></i>
      )}

      {searches.length > 0 && (
        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
          {searches.map((s, i) => (
            <Link
              key={i}
              to={`/details/${s.id}`}
              className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 inline-block p-4 w-full justify-start items-center border-b-2 border-zinc-100'
            >
               <img 
               src={s.backdrop_path || 
                s.profile_path ?`https://image.tmdb.org/t/p/original/${
                    s.backdrop_path || s.profile_path
               }`:noimage} 
               alt={s.title} 
               className="w-[10vh] h-[10vh] inline mr-5 object-cover rounded shadow-lg " />

              <span>{
              s.name ||
               s.title ||
               s.original_name||
                s.original_title
                }</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
