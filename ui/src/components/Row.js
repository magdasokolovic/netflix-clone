import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import { Add, Arrow, Dislike, Like, Play } from "../icons/icons";
import fallback from "../images/movie-bay-logo.png";

export default function Row({ title, data }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const [num, setNum] = useState(5);
  const handleResize = () => {
    setNum(Math.floor(window.innerWidth / 250));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setNum(Math.floor(window.innerWidth / 250));
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <Carousel itemsToShow={num}>
        {data.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <div className={"rating"}>
                {movie.rating}
              </div>

              <div key={index} className="front">
                <picture className="thumbnail">
                  <source
                    srcSet={baseImageUrl + movie.image}
                    type="image/jpg"
                  />
                  <img src={fallback} alt="Movie Bay Logo" />
                </picture>
                {/* <h3 className={isLargeRow ? "title" : "title-small"}>
                  {movie.name}
                </h3> */}
                <h3 className={"title"}>
                  {movie.name}
                </h3>
              </div>

              <div className="back">
                <div className="streaming-info">
                  <p className="seasons">Voted: {movie.vote_count}</p>

                  <p className={"language"}>
                    Languages available: {movie.languages.toString()}
                  </p>
                </div>

                <div className="btn_container">
                  <div>
                    <button className="btn">
                      <Link
                        to={{
                          pathname: "/player",

                          state: { data: movie },
                        }}
                      >
                        {" "}
                        <Play />
                      </Link>
                    </button>
                    <button
                      className={"btn-add btn"}
                    >
                      {" "}
                      <Add />
                      <p
                        className={
                          "tooltip-add"
                        }
                      >
                        Add to the list
                      </p>
                    </button>
                    <button className="btn">
                      <Like />
                    </button>
                    <button className="btn">
                      <Dislike />
                    </button>
                  </div>

                  <button className={`btn-more btn`}>
                    <Arrow />
                    <p className="tooltip">
                      <span className="underline">Overview</span>:{" "}
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
  );
}
