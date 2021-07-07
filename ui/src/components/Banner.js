// NO NEED TO IMPORT THIS CSS FILE HERE IF YOU USE SASS
// import "../sass/components/Banner.css";

import React from "react";
import { Link } from "react-router-dom";

function Banner({ topRatedMovies }) {
  console.log(topRatedMovies);
  return (
    <div className="banner">
      {topRatedMovies && (
        <>
          <img
            className="banner-backdrop"
            alt="backdrop"
            src={`https://image.tmdb.org/t/p/w500${topRatedMovies.image}`}
          />
          <div className="banner-cta">
            <h1 className="banner-title">{topRatedMovies.name}</h1>
            <button className="play__btns">
              <Link
                to={{
                  pathname: "/player",

                  state: { data: topRatedMovies }
                }}
              >
                ▶ Play
              </Link>
            </button>
            <button className="mylist__btns">My List</button>
            <p className="banner-overview">{topRatedMovies.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
