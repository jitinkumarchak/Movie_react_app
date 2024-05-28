import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const Moviedetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}
      )`,

        backgroundPosition: "top-[5%]",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%] "
    >
      <nav className=" h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i class="ri-global-line"></i>
        </a>
      </nav>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
