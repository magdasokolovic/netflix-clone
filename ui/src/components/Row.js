import React, { useEffect, useRef, useState } from "react";
import data from '../mockData.js/data.json'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Carousel from 'react-elastic-carousel'

export default function Row({title, isLargeRow}) {
  const [movies, setMovies] = useState(data)
  const [trailerUrl, setTrailerUrl] = useState('')
//u36N25kTMz4

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
          <Carousel itemsToShow={5} className="row__posters">

            {movies.map((movie, index)=>{
              return (
                  <img 
                      key={movie._id} 
                      className={isLargeRow ? "row__poster-large" : "row__poster"}
                      src={movie.image} 
                      alt={movie.name}
                      onClick={()=>handleClick(movie)} 
                  />
              )
            })}

            {/* <button className="switch-left slider-button">&#60;</button> */}
            {/* <button className="switch-right slider-button">&#62;</button> */}
          </Carousel>

          {/* show youtube video only when we have a trailerURL: */}
         {trailerUrl && <Youtube videoId={trailerUrl} options={options}/>}
      </div>
  )
    
}
