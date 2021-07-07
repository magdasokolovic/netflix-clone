import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import requests from "../Requests";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(false);
  const [latestMovies, setLatestMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const latestData = await fetch(requests.fetchLatest).then((response) =>
          response.json()
        );
        setLatestMovies(latestData.results);
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
        setLoading(false);
        // console.log(latestData);
        // .then((result) => {
        //   console.log(result, "latest");
        //   setLatestMovies(result.results);
        // });

        // fetch(requests.fetchTrending)
        //   .then((response) => response.json())
        //   .then((result) => {
        //     console.log(result, "trending");
        //     setTrendingMovies(result.results);
        //   });

        // fetch(requests.fetchUpcoming)
        //   .then((response) => response.json())
        //   .then((result) => {
        //     console.log(result, "upcoming");
        //     setUpcomingMovies(result.results);
        //   });

        // fetch(requests.fetchTopRated)
        //   .then((response) => response.json())
        //   .then((result) => {
        //     console.log(result, "top rated");
        //     setTopRatedMovies(result.results);
        //   });
        // then set useState
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();

    //here will fetch the movies and here will update movies with "setMovies"
    // fetch("http://localhost:5000/api/series")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     setLoading(false);
    //     setMovies(result);
    //   });
  }, []);

  return (
    <div>
      <Layout>
        {loading && <Loading />}
        <Banner />
        {trendingMovies && (
          <Row title="TRENDING MOVIES" isLargeRow data={trendingMovies} />
        )}
        {latestMovies && <Row title="Latest" data={latestMovies} />}
        {upcomingMovies && <Row title="Upcoming" data={upcomingMovies} />}
        {topRatedMovies && <Row title="Top Rated" data={topRatedMovies} />}
      </Layout>
    </div>
  );
}

export default Home;
