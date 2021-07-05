import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      <Banner />
      <Row title="Netflix Originals" />
      <Row title="NETFLIX ORIGINALS" isLargeRow />
      <Row title="Trending Now" />
      <Row title="Top rated" />
    </div>
  );
}

export default Home;
