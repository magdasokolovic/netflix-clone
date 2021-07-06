import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <Layout>
        <Banner />
        <Row movies={movies} title="Netflix Originals" />
        <Row movies={movies} title="NETFLIX ORIGINALS" isLargeRow />
        <Row movies={movies} title="Trending Now" />
        <Row movies={movies} title="Top rated" />
      </Layout>
    </div>
  );
}

export default Home;
