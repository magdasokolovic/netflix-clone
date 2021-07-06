import React, { useState } from "react";
import Carousel from 'react-elastic-carousel'
import fallback from '../images/movie-bay-logo.png'
import {Arrow, Play, Add, Like, Dislike} from '../icons/icons'
import {Link} from 'react-router-dom'


export default function Row({title, isLargeRow, data}) {

  const baseImageUrl = "https://image.tmdb.org/t/p/w500"

  return (
  <div className="row">
    <h2>{title}</h2>
      <Carousel itemsToShow={isLargeRow ? 5:7}>
        {data.map((movie, index)=>{
          return (
            <div className="movie" key={index}>
              <div className={isLargeRow ? "rating" : "rating-small"}>{movie.rating}</div>

              <div key={index} className="front">
                <picture className="thumbnail">
                  <source srcSet={baseImageUrl + movie.image} type="image/jpg" />
                  <img src={fallback} alt="Movie Bay Logo" />
                </picture>
                <h3 className={isLargeRow ? "title" : "title-small"}>{movie.title}</h3>
              </div>
                    
                
              <div className="back">
                  <div className="streaming-info">
                      <p className={isLargeRow ? "seasons" : "seasons-small"}>Number of seasons: 1</p>

                      <p className={isLargeRow ? "language" : "language-small"}>Languages available: {movie.languages.toString()}
                      </p>
                  </div>

                  <div className="btn_container">
                    <div>
                          <button className={isLargeRow ? "btn" : "btn-small"}>
                      
                            <Link to="/player">
                              <Play/>
                            </Link>
                          </button>
                          <button className={`btn-add ${isLargeRow ? "btn" : "btn-small"}`}>
                            <Add/>
                            <p className={isLargeRow ? "tooltip-add" : "tooltip-small-add"}>Add to the list</p>
                          </button>
                          <button className={isLargeRow ? "btn" : "btn-small"}>
                              <Like/>
                            </button>
                            <button className={isLargeRow ? "btn" : "btn-small"}>
                               <Dislike/>
                            </button>
                        </div>

                        <button className={`btn-more ${isLargeRow ? "btn" : "btn-small"}`}
                            >
                          <Arrow/>
                          <p className={isLargeRow ? "tooltip" : "tooltip-small"}><span className="underline">Overview</span>: {movie.overview}</p>
                        </button>
                    </div>
                  </div>
              <div className="background"></div>         
            </div>
          )
        })}
      </Carousel>

  </div>

  )
    
}
