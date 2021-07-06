import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Row title="Netflix Originals" />
      <Row title="NETFLIX ORIGINALS" isLargeRow />
      <Row title="Trending Now" />
      <Row title="Top rated" />
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
