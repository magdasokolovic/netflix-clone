import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import fallback from '../images/movie-bay-logo.png'
import {Arrow, Play, Add, Like, Dislike} from '../icons/icons'
import {Link} from 'react-router-dom'
export default function Row({title, isLargeRow}) {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    //here will fetch the movies and here will update movies with "setMovies"
    fetch("http://localhost:5000/api/series")
    .then(response => response.json())
    .then(result=>{
      console.log(result)
      setMovies(result)
    })
  }, [])

 
  return (
    <div className="row">
    <h2>{title}</h2>
      <Carousel itemsToShow={isLargeRow ? 5:7}>

        {movies.map((movie, index)=>{

          return (
            <div className="movie" key={index}>
                    <div className={isLargeRow ? "rating" : "rating-small"}>{movie.rating}</div>

                    <div key={index} className="front">
                      <picture className="thumbnail">
                        <source srcSet={movie.image} type="image/jpg" />
                        <img src={fallback} alt="Movie Bay Logo" />
                      </picture>
                      <h3 className={isLargeRow ? "title" : "title-small"}>{movie.name}</h3>
                    </div>
                    
                
                    <div className="back">
                        <div className="streaming-info">
                            <p className={isLargeRow ? "seasons" : "seasons-small"}>Number of seasons: {movie.seasons.length}</p>

                            <p className={isLargeRow ? "language" : "language-small"}>Languages available: {movie.languages.toString()}
                            </p>
                        </div>

                        <div className="btn_container">
                            <div>
                                 <button className={isLargeRow ? "btn" : "btn-small"}>
                                  <Play/>
                                  <Link to="./player"></Link>
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
