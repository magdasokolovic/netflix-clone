import React, { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Row from "../components/Row";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // here will fetch the movies and here will update movies with "setMovies"
    fetch("http://localhost:5000/api/series")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        setMovies(result);
      });
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <Header />
      <Banner />
      <Row movies={movies} title="Netflix Originals" />
      <Row movies={movies} title="NETFLIX ORIGINALS" isLargeRow />
      <Row movies={movies} title="Trending Now" />
      <Row movies={movies} title="Top rated" />
    </div>
  );
}

export default Home;
// import React, { useEffect, useState } from "react";
// export default function Series() {
//   const [series, setSeries] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/api/series")
//       .then((res) => res.json())
//       .then((result) => {
//         if (result) {
//           setSeries(result);
//         } else {
//           console.log(result.message);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div className="series-overview">
//       <h1>all tv shows</h1>
//     </div>
//   );
// }
