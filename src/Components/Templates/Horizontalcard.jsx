import React from "react";
import { Link } from "react-router-dom";
import noimage from "/default_img.jpg";

const Horizontalcard = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return null; // or render some fallback UI
  }
  console.log("Horizontalcard data:", data);

  return (
    <div className="w-full flex overflow-y-hidden mb-5 p-5">
      {data.map((d, i) => (
        <Link
          key={i}
          to={`/${d.media_type}/details/${d.id}`}
          className="min-w-[15%] bg-zinc-900 mr-5 mb-5"
        >
          <img
            className="w-full h-[45%] object-cover"
            src={
              d.backdrop_path || d.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.poster_path
                  }`
                : noimage
            }
            alt=""
          />
          <div className="text-white p-3 h-[45%]">
            <h1 className="text-xl font-semibold">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p>
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-500">More</span>
            </p>
          </div>
        </Link>
      ))}
      {data.length === 0 ? (
        <h1 className="text-3xl text-white font-black text-center">
          Nothing to show
        </h1>
      ) : null}
    </div>
  );
};

export default Horizontalcard;
