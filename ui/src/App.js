import "./sass/main.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Episode from "./pages/Episode.overview";
import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Serie from "./pages/Serie.overview";

// import data from './mockData.js/data.json'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
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

        <Switch>
          <Route path="/serie">
            <Serie />
          </Route>
          <Route path="/season">
            <Season />
          </Route>
          <Route path="/ep">
            <Episode />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
