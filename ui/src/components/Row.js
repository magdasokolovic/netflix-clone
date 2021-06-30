import React, { useState } from "react";

export default function Row({title}) {
  
  const [movies, setMovies] = useState([])

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
    
}
