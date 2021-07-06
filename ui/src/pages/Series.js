import React, { useEffect, useState } from "react";
export default function Series() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/series")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSeries(result);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="series-overview">
      <div className="carousel search__posters">
        {series.map((serie) => {
          return (
            <div key={serie._id} className="carousel-box">
              <img
                src={serie.image}
                alt={serie.name}
                className="search__poster"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
