import React from "react";
import Row from "../components/Row";

function Home() {
  return (
    <div>
      {/* image needs to be exchanged later with the header */}
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
        alt="cinema"
        className="hero"
      />
      <Row title="Netflix Originals" />
      <Row title="NETFLIX ORIGINALS" isLargeRow />
      <Row title="Trending Now" />
      <Row title="Top rated" />
    </div>
  );
}

export default Home;
