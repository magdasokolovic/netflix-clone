import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Requests";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [latestMovies, setLatestMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const latestData = await fetch(requests.fetchLatest).then((response) =>
          response.json()
        );
        setLatestMovies(latestData);
        const trendingData = await fetch(requests.fetchTrending).then(
          (response) => response.json()
        );
        setTrendingMovies(trendingData);
        const upcomingData = await fetch(requests.fetchUpcoming).then(
          (response) => response.json()
        );
        setUpcomingMovies(upcomingData);
        const topratedData = await fetch(requests.fetchTopRated).then(
          (response) => response.json()
        );
        setTopRatedMovies(topratedData);
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();

  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {trendingMovies && <Row title="TRENDING MOVIES" isLargeRow data={trendingMovies.slice(0, 10)} />}
      {latestMovies && <Row title="Latest" data={latestMovies} />}
      {upcomingMovies && <Row title="Upcoming" data={upcomingMovies} />}
      {topRatedMovies && <Row title="Top Rated" data={topRatedMovies} />}
      <Footer />
    </div>
  );
}

export default Home;
