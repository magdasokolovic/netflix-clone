import React from "react";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import fallback from "../images/movie-bay-logo.png";

function Season(props) {
  const history = useHistory();
  const serieData = history.location.state.serie;
  return (
    <Layout>
      <Navbar />
      <div className="season-wrap">
        <div className="card top-card">
          <h1>{serieData.name}</h1>
          <h3>Number of Seasons: {serieData.seasons.length} </h3>
        </div>
        {serieData.seasons.map((season, index) => {
          return (
            <>
              <h1>Season {index + 1}</h1>
              <div className="card bottom-card">
                <Carousel itemsToShow={5} itemsToScroll={5}>
                  {season.map((ep, i) => (
                    <div className="ep-card" key={i}>
                      {/* <h1>Episode {i + 1}</h1> */}
                      <img src={ep.image} alt="" />

                      <div className="ep-content">
                        <h3>{ep.name}</h3>
                        <p>{ep.overview}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </>
          );
        })}
      </div>
    </Layout>
  );
}

export default Season;
