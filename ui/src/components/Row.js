import React, { useEffect, useState } from "react";
import data from '../mockData.js/data.json'

export default function Row({title}) {
  
  const [movies, setMovies] = useState([])
  
  useEffect(()=>{

  }, [])

  console.log(data)
  return (
    <div>
      <h2>{title}</h2>
      
    </div>
  )
    
}
