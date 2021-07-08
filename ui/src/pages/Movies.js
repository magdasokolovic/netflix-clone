import React, { useEffect, useState } from "react";
import fallback from "../images/movie-bay-logo.png";
import Carousel from "react-elastic-carousel";
import { Link, useHistory } from "react-router-dom";
import { Add, Arrow, Dislike, Like, Play } from "../icons/icons";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const history = useHistory();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

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
    <Layout>
      <div className="row movie-row">
        {loading && <Loading />}

        <Carousel itemsToShow={5} itemsToScroll={5}>
          {movies.map((movie) => {
            return (
              <div className="movie" key={movie._id}>
                <div className="rating">{movie.rating}</div>

                <div key={movie._id} className="front">
                  <picture className="thumbnail">
                    <source
                      srcSet={baseImageUrl + movie.image}
                      type="image/jpg"
                    />
                    <img src={fallback} alt="Movie Bay Logo" />
                  </picture>
                  <h3 className="title">{movie.name}</h3>
                </div>

                <div className="back">
                  <div className="streaming-info">
                    <p className="language">Language: {movie.languages[0]}</p>
                  </div>
                  <div className="btn_container">
                    <div>
                      <button className="btn">
                        <Link
                          to={{
                            pathname: "/player",
                            state: { data: movie }
                          }}
                        >
                          <Play />
                        </Link>
                      </button>
                      <button className="btn-add btn">
                        <Add />
                        <p className="tooltip-add">Add to the list</p>
                      </button>
                      <button className="btn">
                        <Like />
                      </button>
                      <button className="btn">
                        <Dislike />
                      </button>
                    </div>

                    <button className="btn-more btn">
                      <Arrow />
                      <p className="tooltip">
                        <span className="underline">Overview </span>:
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
