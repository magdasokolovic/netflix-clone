import React from "react";
import Carousel from "react-elastic-carousel";
import fallback from "../images/movie-bay-logo.png";
import { Arrow, Play, Add, Like, Dislike } from "../icons/icons";
import { Link } from "react-router-dom";

export default function Row({ title, isLargeRow, data }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (

    <div className="row">
      <h2>{title}</h2>
      <Carousel itemsToShow={5}>
        {data.map((movie, index) => {
          return (
            <div className="movie" key={index}>

              {/* <div className={isLargeRow ? "rating" : "rating-small"}> */}
              <div className="rating">{movie.rating}</div>

              <div key={index} className="front">
                <picture className="thumbnail">
                  <source
                    srcSet={baseImageUrl + movie.image}
                    type="image/jpg"
                  />
                  <img src={fallback} alt="Movie Bay Logo" />
                </picture>
                {/* <h3 className={isLargeRow ? "title" : "title-small"}> */}
                <h3 className="title">{movie.name}</h3>

              <div className={isLargeRow ? "rating" : "rating-small"}>{movie.rating}</div>

              <div key={index} className="front">
                <picture className="thumbnail">
                  <source srcSet={baseImageUrl + movie.image} type="image/jpg" />
                  <img src={fallback} alt="Movie Bay Logo" />
                </picture>
                <h3 className={isLargeRow ? "title" : "title-small"}>
                  {movie.name}
                </h3>

              </div>

              <div className={isLargeRow ? "back" : "back-small"}>
                <div className="streaming-info">

                  <p className="seasons">Voted: {movie.vote_count}</p>

                  <p className="language">Languages: {movie.languages[0]}</p>

                  <p className={isLargeRow ? "seasons" : "seasons-small"}>
                    Number of votes: {movie.vote_count}
                  </p>

                  <p className={isLargeRow ? "language" : "language-small"}>
                    Languages available: {movie.languages}
                  </p>

                </div>

                <div className="btn_container">
                  <div>
                    <button className="btn">
                      <Link to="/player">
                        <Play key={movie.key}/>
                      </Link>
                    </button>
                    <button
                      className={`btn-add ${isLargeRow ? "btn" : "btn-small"}`}
                    >
                      <Add />
                      <p
                        className={
                          isLargeRow ? "tooltip-add" : "tooltip-small-add"
                        }
                      >
                        Add to the list
                      </p>
                    </button>
                    {/* <button className={isLargeRow ? "btn" : "btn-small"}> */}
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
