import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import requests from "../Requests";

function Home() {
  const [num, setNum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestMovies, setLatestMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const topratedData = await fetch(requests.fetchTopRated).then(
          (response) => response.json()
        );
        setTopRatedMovies(topratedData);
        setNum(Math.floor(Math.ceil(Math.random() * topratedData.length) - 1));
        // Trending
        const trendingData = await fetch(requests.fetchTrending).then(
          (response) => response.json()
        );
        setTrendingMovies(trendingData);
        /**
         * We just NEEDED 2 of these data to show on
         * viewable screen at the very first ( reduce loading time)
         * */
        const upcomingData = await fetch(requests.fetchUpcoming).then(
          (response) => response.json()
        );
        setUpcomingMovies(upcomingData);
        const topratedData = await fetch(requests.fetchTopRated).then(
          (response) => response.json()
        );
        setTopRatedMovies(topratedData);
        const latestData = await fetch(requests.fetchLatest).then((response) =>
          response.json()
        );
        setLatestMovies(latestData);
        setLoading(false);
      } catch (error) {
        setTimeout(() => setLoading(false), 3000);
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Layout>
        {/* is this needed?
        {loading && <Loading />} */}

        <Banner topRatedMovies={topRatedMovies[num]} />
        {trendingMovies && (
          <Row title="Popular" isLargeRow data={trendingMovies} />
        )}
        {latestMovies && <Row title="Latest" data={latestMovies} />}
        {upcomingMovies && <Row title="Upcoming" data={upcomingMovies} />}
        {topRatedMovies && <Row title="Top Rated" data={topRatedMovies} />}
      </Layout>
    </div>
  );
}

export default Home;
