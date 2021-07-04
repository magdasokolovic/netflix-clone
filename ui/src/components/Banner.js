import "../sass/components/Banner.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = "4251b22b61515cc0f3716d0531658a55";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (file) => `https://www.themoviedb.org/t/p/original${file}`;

function Banner() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getPopular = api.get("discover/movie", { params: { api_key } });

  useEffect(() => {
    getPopular.then((res) => {
      setData(res.data.results);
    });
  }, []);

  const images = data.map((image) => getImage(image.backdrop_path));
  const names = data.map((name) => name.original_title);
  const synopses = data.map((synopsis) => synopsis.overview);

  const index = Math.floor(Math.random() * images.length);

  // if (images[index] == null) {
  //   index = Math.floor(Math.random() * images.length - 1);
  // } else {
  //   index = Math.floor(Math.random() * images.length);
  // }

  // console.log(synopses);
  return (
    <div className="banner">
      <img className="banner-backdrop" src={images[index]} />

      <button className="play__btns">Play</button>
      <button className="mylist__btns">My List</button>
      <h1 className="banner-title">{names[index]}</h1>
      <div></div>
      <p className="banner-overview">{synopses[index]}</p>
    </div>
  );
}

export default Banner;
