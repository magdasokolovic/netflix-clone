// NO NEED TO IMPORT THIS CSS FILE HERE IF YOU USE SASS
// import "../sass/components/Banner.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import requests from "../Requests";

const api_key = "4251b22b61515cc0f3716d0531658a55";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (file) => `https://www.themoviedb.org/t/p/original${file}`;

function Banner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  const api = axios.create({ baseURL: BASE_URL });

  useEffect(() => {
    setLoading(true);
    const fetchdata = async () => {
      const topratedData = await fetch(requests.fetchTopRated).then(
        (response) => response.json()
      );
      let x = Math.floor(Math.random() * topratedData.length - 1);
      console.log(topratedData);
      const data = topratedData[x];
      setTopRatedMovies(data);
      setLoading(false);
    };
    fetchdata();
  }, []);

  console.log(topRatedMovies);

  return (
    <div className="banner">
      {loading && <Loading />}
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
