import React, { useEffect, useState } from "react";

import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Carousel from 'react-elastic-carousel'
import arrow from '../icons/arrow-circle-down-solid.svg'
import play from '../icons/play-circle-regular.svg'
import add from '../icons/plus-solid.svg'
import like from '../icons/thumbs-down-regular.svg'
import dislike from '../icons/thumbs-up-regular.svg'

export default function Row({title, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')


  useEffect(()=>{
    //here will fetch the movies and here will update movies with "setMovies"
    fetch("http://localhost:5000/api/series")
    .then(response => response.json())
    .then(result=>{
      console.log(result)
      setMovies(result)
    })
  }, [])

  //Youtube trailer options:
  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  //youtube trailer works only some movies
  const handleClick = (movie) => {
    // if the trailer is open then hide it:
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      //when you pass in the the movie name inside movieTrailer goes and finds the trailer of it
      movieTrailer(movie?.name || '')
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch(error=>console.log(error))
    }
  }

  return (
    <div className="row">
    <h2>{title}</h2>
      <Carousel itemsToShow={isLargeRow ? 5:7}>

        {movies.map((movie, index)=>{
          return (
            <div className="movie" key={index}>
                    <div className={isLargeRow ? "rating" : "rating-small"}>{movie.rating}</div>

                    <div key={index} className="front">
                      <img
                          className="thumbnail"
                          src={movie.image} 
                          alt={movie.name}
                          onClick={()=>handleClick(movie)} 
                      />
                        <h3 className={isLargeRow ? "title" : "title-small"}>{movie.name}</h3>

                    </div>
                    
                
                    <div className="back">
                        <div className="streaming-info">
                            <p className={isLargeRow ? "rating" : "rating-small"}>Number of seasons: {movie.seasons.length}</p>
                            <p className={isLargeRow ? "rating" : "rating-small"}>Rating: {movie.rating}</p>
                        </div>

                        <div className="btn_container">
                            <div>
                                <button className={isLargeRow ? "btn" : "btn-small"}><img src={play} alt="play button" /></button>
                                <button className={isLargeRow ? "btn" : "btn-small"}><img src={add} alt="add button" /></button>
                                <button className={isLargeRow ? "btn" : "btn-small"}><img src={like} alt="like button" /></button>
                                <button className={isLargeRow ? "btn" : "btn-small"}><img src={dislike} alt="dislike button" /></button>
                            </div>
                            <button className={isLargeRow ? "btn" : "btn-small"}><img src={arrow} alt="click for more info button" /></button>
                        </div>
                    </div>

                    <div className="background"></div>

                    
            </div>
            
          )
        })}

      </Carousel>

      {/* show youtube video only when we have a trailerURL: */}
     {trailerUrl && <Youtube videoId={trailerUrl} options={options}/>}
  </div>

  )
    
}
