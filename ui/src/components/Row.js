import React, { useEffect, useState } from "react";
import data from '../mockData.js/data.json'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

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
      //when you pass in the the movie name it goes and finds the trailer of it
      movieTrailer(movie?.name || '')
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch(error=>console.log(error))
    }
  }

  console.table(data)
  return (
      <div className="row">
        <h2>{title}</h2>
          <div className="row__posters">
            {movies.map(movie=>{
              return (
                  <img 
                      key={movie._id} 
                      className={`row__poster ${isLargeRow && "row__poster-large"}`}
                      src={movie.image} 
                      alt={movie.name}
                      onClick={()=>handleClick(movie)} 

                  />
              )
            })}
          </div>
          {/* show youtube video only when we have a trailerURL: */}
         {trailerUrl && <Youtube videoId={trailerUrl} options={options}/>}
      </div>
  )
    
}
