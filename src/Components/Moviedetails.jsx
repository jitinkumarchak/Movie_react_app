import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import Horizontalcard from "./Templates/Horizontalcard";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  console.log(info)
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.6),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}
      )`,

        backgroundPosition: "top-[5%]",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[120vh] px-[10%] relative overflow-hidden"
    >
      {/* part 1 navigation*/}
      <nav className=" h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i className="ri-global-line"></i>
        </a>
      </nav>

      {/* part2 poster and details */}

      <div className="w-full flex">
        <img
          className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white ">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <h1 className="text-2xl mt-2 italic font-semibold text-white">
            {info.detail.tagline}
          </h1>

          <div className=" mt-3 mb-6   flex font-bold text-white items-center gap-x-5 ">
            <span className=" bg-yellow-600 text-xl text-white w-[5vh] h-[5vh] flex justify-center items-center rounded-full font-semibold ">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>

            <h1 className="text-2xl w-[60px]  leading-6">User Score </h1>
            <h1 className="">
              <i className=" mr-2 text-[#f5d63b] ri-calendar-schedule-fill"></i>
              {info.detail.release_date}
            </h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>
              <i className=" text-[#e7bf3a] mr-1 ri-time-fill"></i>
              {info.detail.runtime}min
            </h1>
          </div>

          <h1 className="text-2xl mb-2 italic font-semibold text-white">
            Overview
          </h1>
          <p className=" ">{info.detail.overview}</p>

          <h1 className="text-2xl italic font-semibold text-white">
            Available in
          </h1>
          <p className="mb-3">{info.translations.join(",")}</p>

          <Link
            className=" absolute left-[10.5%] top-[50vh] mt-1 py-5  px-6 text-xl font-semibold bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className=" text-xl mr-2 ri-google-play-fill"></i> Watch Trailer
          </Link>
        </div>
      </div>

      {/* part3  Available on platforms */}

      <div className=" w-[80%] flex flex-col gap-y-5 mt-5 left-[30%] absolute ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold italic">Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md  "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold italic">Available on rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md  "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="font-semibold italic">Available on Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md  "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part4  recommendations and similar stuff */}

      <Horizontalcard 
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
