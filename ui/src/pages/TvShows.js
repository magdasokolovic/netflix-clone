import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import fallback from "../images/movie-bay-logo.png";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { Arrow, Play, Add, Like, Dislike } from "../icons/icons";
import { Link, useHistory } from "react-router-dom";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/api/series")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSeries(result);
          setLoading(false);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSerie = (serie) => {
    console.log(serie);
    // history.push({
    //   pathname: "/season",
    //   state: {
    //     serie
    //   }
    // });
    history.push("/season", {
      serie
    });
  };
  return (
    <Layout>
      <div className="row">
        {loading && <Loading />}
        <Carousel itemsToShow={5} itemsToScroll={5}>
          {series.map((serie, index) => {
            return (
              <div
                className="movie"
                style={{ marginTop: "6rem" }}
                key={index}
                onClick={() => handleSerie(serie)}
              >
                <div className="rating">{serie.rating}</div>

                <div key={index} className="front">
                  <picture className="thumbnail">
                    <source
                      srcSet={baseImageUrl + serie.image}
                      type="image/jpg"
                    />
                    <img src={fallback} alt="Movie Bay Logo" />
                  </picture>

                  <h3 className="title">{serie.name}</h3>
                </div>

                <div className="back">
                  <div className="streaming-info">
                    <p className="seasons">Seasons: {serie.seasons.length}</p>

                    <p className="language">Languages: {serie.languages[0]}</p>
                  </div>

                  <div className="btn_container">
                    <div>
                      <button className="btn">
                        <Link to="/player">
                          <Play />
                        </Link>
                      </button>
                      <button className={`btn-add  btn `}>
                        <Add />
                        <p className="tooltip-add">Add to the list</p>
                      </button>
                      {/* <button className={isLargeRow ? "btn" : "btn-small"}> */}
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
    </Layout>
  );
}
