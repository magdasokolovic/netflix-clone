// NOT WORKING YET!

import React, { useEffect, useState } from "react";
import fallback from "../images/movie-bay-logo.png";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Add, Arrow, Dislike, Like, Play } from "../icons/icons";

export default function Series() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/series")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSeries(result);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    // <div className="series-overview">
    //   <div className="carousel search__posters">
    //     {series.map((serie) => {
    //       return (
    //         <div key={serie._id} className="carousel-box">
    //           <img
    //             src={serie.image}
    //             alt={serie.name}
    //             className="search__poster"
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="row">
      <h2>all tv shows</h2>
      <Carousel itemsToShow={7}>
        {series.map((serie) => {
          return (
            <div className="serie" key={serie._id}>
              <div className="rating-small">{serie.rating}</div>

              <div key={serie._id} className="front">
                <picture className="thumbnail">
                  <source srcSet={serie.image} type="image/jpg" />
                  <img src={fallback} alt="Movie Bay Logo" />
                </picture>
                <h3 className="title-small">{serie.name}</h3>
              </div>

              <div className="back">
                <div className="streaming-info">
                  <p className="seasons-small">
                    Number of seasons: {serie.seasons.length}
                  </p>
                  <p className="language-small">
                    Languages available: {serie.languages.toString()}
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
                      <span className="underline">Overview</span>:{" "}
                      {serie.overview}
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
  );
}
