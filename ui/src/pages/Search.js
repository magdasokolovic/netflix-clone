import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

export default function Search(props) {
  console.log(props.search);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/api/series")
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          if (props.search) {
            const found = result.filter((serie) =>
              serie.name.toLowerCase().includes(props.search.toLowerCase())
            );
            console.log(found);
            setSeries(found);
            setLoading(false);
          } else {
            setSeries(result);
            console.log(result);
          }
        } else {
          console.log(result.message);
        }
      });
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      <div className="search__posters carousel">
        {series.length > 0 ? (
          series.map((serie) => {
            return (
              <div key={serie._id} className="carousel-box">
                <img
                  src={serie.image}
                  alt={serie.name}
                  className="search__poster"
                />
                {/* make sure we have backup image in case image link is not working!!!! */}
              </div>
            );
          })
        ) : (
          // should add delay to this message
          <div className="error-message">
            <h2>
              Unfortunately we couldn't find anything titled "{props.search}".
            </h2>
          </div>
        )}
      </div>
    </Layout>
  );
}
