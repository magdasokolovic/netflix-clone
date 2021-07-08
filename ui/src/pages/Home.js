import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import requests from "../Requests";

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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Layout>
        {loading && <Loading />}
        <Banner />
        {trendingMovies && (
          <Row title="Popular" isLargeRow data={trendingMovies} />
        )}
        {latestMovies && <Row title="Latest" isLargeRow data={latestMovies} />}
        {upcomingMovies && (
          <Row title="Upcoming" isLargeRow data={upcomingMovies} />
        )}
        {topRatedMovies && (
          <Row title="Top Rated" isLargeRow data={topRatedMovies} />
        )}
      </Layout>
    </div>
  );
}

export default Home;
