import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className=" bg-[rgba(0,0,0,0.8)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">

      <Link
        onClick={() => navigate(-1)}
        className=" absolute text-4xl text-white z-10 right-[5%] top-[0] hover:text-[#6556cd] ri-close-fill"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
        controls
        height={700}
        width={1300}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
      ): ( 
        <Notfound/>
      )}
      
    </div>
    )
};

export default Trailer;
