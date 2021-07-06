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
