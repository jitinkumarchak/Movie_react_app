import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import Horizontalcard from "./Templates/Horizontalcard";
import Dropdown from "./Templates/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[5%] h-[220vh] w-screen bg-[#1f1e24]">
      {/* part 1 navigation*/}
      <nav className=" h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* part 2 left poster and details  */}
        <div className="w-[30%]">
          <img
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[35vh] object-cover "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/*Socials */}

          <div className="text-2xl text-white flex gap-x-3">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>

          {/* personol details */}
          <h1 className="text-2xl text-zinc-400 font-semibold ">
            Personol Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">Known for</h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">Gender</h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">Birthday</h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">
            {info.detail.birthday}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold ">
            Place of Birth
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold ">
            {info.detail.place_of_birth}
          </h1>
        </div>

        {/* part3 details and information */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black mb-3 ">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mb-3">Overview</h1>
          <p className="text-zinc-400 text-sm">{info.detail.biography}</p>

          <h1 className="text-xl text-zinc-400 font-semibold mt-5 italic">
            Acting Career{" "}
          </h1>

          <Horizontalcard data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold mt-3">Acting</h1>

            <Dropdown
              title={"category"}
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          

          <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-zinc-400 mt-5 "  ></div>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
