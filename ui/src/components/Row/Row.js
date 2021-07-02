import React, { useEffect, useState } from "react";
import data from '../../mockData.js/data.json'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Carousel from 'react-elastic-carousel'
import arrow from '../../icons/arrow-circle-down-solid.svg'
import play from '../../icons/play-circle-regular.svg'
import add from '../../icons/plus-solid.svg'
import like from '../../icons/thumbs-down-regular.svg'
import dislike from '../../icons/thumbs-up-regular.svg'

export default function Row({title, isLargeRow}) {
  const [movies, setMovies] = useState(data)
  const [trailerUrl, setTrailerUrl] = useState('')


  useEffect(()=>{
    //here will fetch the movies and here will update movies with "setMovies"
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


  console.log(data)
  return (
    <div className="row">
    <p>{title}</p>
      <Carousel itemsToShow={isLargeRow ? 5:7}>

        {movies.map((movie, index)=>{
          return (
            <div className="movie">
                    <div className="rank">3</div>

                    <div key={index} className="front">
                    <img
                        className="thumbnail"
                        src={movie.image} 
                        alt={movie.name}
                        onClick={()=>handleClick(movie)} 
                    />
                    <h3 className="name">{movie.name}</h3>
                    </ div>
                
                    <div className="back">
                        <div className="streaming-info">
                            <p className="game-stat">Number of seasons: {movie.number_of_seasons}</p>
                            <p className="game-stat">tags: Romance, Comedy</p>
                        </div>

                        <div className="btn_container">
                            <div>
                                <button><img src={play} alt="play button" /></button>
                                <button><img src={add} alt="add button" /></button>
                                <button><img src={like} alt="like button" /></button>
                                <button><img src={dislike} alt="dislike button" /></button>
                            </div>
                            <button><img src={arrow} alt="click for more info button" /></button>
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
