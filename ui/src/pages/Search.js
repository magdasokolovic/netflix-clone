import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import requests from "../Requests";
import { useHistory } from "react-router-dom";
import Row from "../components/Row";

export default function Search(props) {
  const [series, setSeries] = useState();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetch(requests.fetchMovies)
          .then((res) => res.json())
          .then((result) => {
            const foundMovies = result.filter((movie) =>
              movie.name.toLowerCase().includes(props.search.toLowerCase())
            );
            console.log(foundMovies);
            setMovies(foundMovies);
          });

        await fetch(requests.fetchSeries)
          .then((res) => res.json())
          .then((result) => {
            const foundSeries = result.filter((serie) =>
              serie.name.toLowerCase().includes(props.search.toLowerCase())
            );
            console.log(foundSeries);
            setSeries(foundSeries);
          });

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      <div
        className="search-row"
        style={{ paddingTop: "110px", minHeight: "80vh" }}
      >
        {/* not working right now, it is only showing the movies  */}
        {(series && series.length > 0) || (movies && movies.length > 0) ? (
          <Row isLargeRow data={(series, movies)} />
        ) : (
          <div className="error-message">
            <h2 style={{ margin: "40px" }}>
              Unfortunately we couldn't find anything titled "{props.search}".
            </h2>
          </div>
        )}
      </div>
    </Layout>
  );
}

/////////////////////////// old way of fetching:

//   fetch("http://localhost:5000/api/films")
//     .then((res) => res.json())
//     .then((result) => {
//       if (result) {
//         if (props.search) {
//           const found = result.filter((movie) =>
//             movie.name.toLowerCase().includes(props.search.toLowerCase())
//           );
//           console.log(found);
//           setMovies(found);
//           setLoading(false);
//         } else {
//           setMovies(result);
//           console.log(result);
//         }
//       } else {
//         console.log(result.message);
//       }
//     })
//     .catch((err) => console.log(err), []);

//   fetch("http://localhost:5000/api/series")
//     .then((res) => res.json())
//     .then((result) => {
//       if (result) {
//         if (props.search) {
//           const found = result.filter((serie) =>
//             serie.name.toLowerCase().includes(props.search.toLowerCase())
//           );
//           console.log(found);
//           setSeries(found);
//           setLoading(false);
//         } else {
//           setSeries(result);
//           console.log(result);
//         }
//       } else {
//         console.log(result.message);
//       }
//     });
// }, []);
