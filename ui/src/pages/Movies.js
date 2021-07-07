// NOT WORKING YET!

import React, { useEffect, useState } from "react";
import fallback from "../images/movie-bay-logo.png";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Add, Arrow, Dislike, Like, Play } from "../icons/icons";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/api/films")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setMovies(result);
          setLoading(false);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    // <div className="movies-overview">
    //   <div className="carousel search__posters">
    //     {movies.map((movie) => {
    //       return (
    //         <div key={movie._id} className="carousel-box">
    //           <img
    //             src={movie.image}
    //             alt={movie.name}
    //             className="search__poster"
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <Layout>
      {loading && <Loading />}
      <div className="row movie-row">
        <h2>all movies</h2>
        <Carousel itemsToShow={7}>
          {movies.map((movie) => {
            return (
              <div className="movie" key={movie._id}>
                <div className="rating-small">{movie.rating}</div>

                <div key={movie._id} className="front">
                  <picture className="thumbnail">
                    {/* <source srcSet={movie.image} type="image/jpg" /> */}
                    <img src={fallback} alt="Movie Bay Logo" />
                  </picture>
                  <h3 className="title-small">{movie.name}</h3>
                </div>

                <div className="back">
                  <div className="streaming-info">
                    {/* <p className="seasons-small">
                      Number of seasons: {movie.seasons.length}
                    </p> */}
                    <p className="language-small">
                      Languages available: {movie.languages.toString()}
                    </p>
                  </div>
                  <div className="btn-container">
                    <div>
                      <button className="btn-small">
                        <Play />
                        <Link to="./player"></Link>
                      </button>
                      <button className="btn-add btn-small">
                        <Add />
                        <p className="tooltip-small-add">Add to the list</p>
                      </button>
                      <button className="btn-small">
                        <Like />
                      </button>
                      <button className="btn-small">
                        <Dislike />
                      </button>
                    </div>

                    <button className="btn-more btn-small">
                      <Arrow />
                      <p className="tooltip-small">
                        <span className="underline">Overview</span>:
                        {movie.overview}
                      </p>
                    </button>
                  </div>
                </div>
                <div className="background"></div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Layout>
  );
}
