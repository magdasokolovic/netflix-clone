import React, {useEffect, useState} from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from '../Requests';

function Home() {
  const [latestMovies, setLatestMovies] = useState()
  const [upcomingMovies, setUpcomingMovies] = useState()
  const [topRatedMovies, setTopRatedMovies] = useState()
  const [trendingMovies, setTrendingMovies] = useState()

  useEffect(() => {

    fetch(requests.fetchLatest)
    .then(response => response.json())
    .then(result=>{
      console.log(result, "latest")
      setLatestMovies(result.results)
    })

    fetch(requests.fetchTrending)
    .then(response => response.json())
    .then(result=>{
      console.log(result, "trending")
      setTrendingMovies(result.results)
    })

    fetch(requests.fetchUpcoming)
    .then(response => response.json())
    .then(result=>{
      console.log(result, "upcoming")
      setUpcomingMovies(result.results)
    })

    fetch(requests.fetchTopRated)
    .then(response => response.json())
    .then(result=>{
      console.log(result, "top rated")
      setTopRatedMovies(result.results)
    })
  }, [])


  return (
    <div>
      <Banner />
      {trendingMovies && <Row title="POPULAR" isLargeRow data={trendingMovies}/>}
      {latestMovies && <Row title="Latest" data={latestMovies}/>}
      {upcomingMovies &&<Row title="Upcoming" data={upcomingMovies}/>}
      {topRatedMovies && <Row title="Top Rated" data={topRatedMovies}/>}
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
