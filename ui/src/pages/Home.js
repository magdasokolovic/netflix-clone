import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from '../Requests';

function Home() {
  return (
    <div>
      <Banner />
      <Row title="POPULAR" isLargeRow fetchUrl={requests.fetchTrending}/>
      <Row title="Latest" fetchUrl={requests.fetchLatest}/>
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
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
