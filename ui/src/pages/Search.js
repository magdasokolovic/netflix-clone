import React, { useEffect, useState } from "react";

export default function Search(props) {
  console.log(props.search);
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
      });
  }, []);

  useEffect(() => {
    const found = series.filter((serie) =>
      serie.name.toLowerCase().includes(props.search.toLowerCase())
    );
    console.log(found);
    // setSeries(found);
  }, [series, props.search]);

  return (
    <div className="search__posters carousel">
      {series.length > 0 ? (
        series.map((serie) => {
          return (
            <div key={serie._id} className="carousel-box">
              <img
                src={serie.image}
                alt={serie.name}
                className="search__poster"
              />
              {/* make sure we have backup image in case image link is not working!!!! */}
            </div>
          );
        })
      ) : (
        <h2>no series found</h2>
      )}
    </div>
  );
}

// {series.map((serie) => {
//   const foundSeries = serie.name
//     .toLowerCase()
//     .includes(props.search.toLowerCase());
//   console.log(foundSeries);
//   if (foundSeries) {
//     return (
//       <div key={serie._id} className="carousel-box">
//         <img
//           src={serie.image}
//           alt={serie.name}
//           className="search__poster"
//         />
//         {/* make sure we have backup image in case image link is not working!!!! */}
//       </div>
//     );
//   }
// })}
