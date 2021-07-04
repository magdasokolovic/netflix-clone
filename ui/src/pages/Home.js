import React from "react";
function Home() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:5000/api/series")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>This is HomePage</h1>
      {data && data.map((x) => <h1>{x.rating}</h1>)}
    </div>
  );
}

export default Home;
