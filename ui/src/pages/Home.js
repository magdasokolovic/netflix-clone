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
    // const fetchdata = async () => {
    //   try {
    //     const lastest = await fetch("link latest");
    //     const lastestData = await lastest.json();
    //     const upcoming = await fetch("link upcoming");
    //     const upcomingData = await upcoming.json();
    //     // then set useState
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchdata();

    setLoading(true);
    //here will fetch the movies and here will update movies with "setMovies"
    fetch("http://localhost:5000/api/series")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        setMovies(result);
      });

    fetch(requests.fetchLatest)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "latest");
        setLatestMovies(result.results);
      });

    fetch(requests.fetchTrending)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "trending");
        setTrendingMovies(result.results);
      });

    fetch(requests.fetchUpcoming)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "upcoming");
        setUpcomingMovies(result.results);
      });

    fetch(requests.fetchTopRated)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "top rated");
        setTopRatedMovies(result.results);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {trendingMovies && (
        <Row title="POPULAR" isLargeRow data={trendingMovies} />
      )}
      {latestMovies && <Row title="Latest" data={latestMovies} />}
      {upcomingMovies && <Row title="Upcoming" data={upcomingMovies} />}
      {topRatedMovies && <Row title="Top Rated" data={topRatedMovies} />}
      <Footer />
    </div>
  );
}

export default Home;
