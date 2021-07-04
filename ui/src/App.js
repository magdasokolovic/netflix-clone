import "./sass/main.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Banner from "./components/Banner";
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
        <div className="nav-active">
          <Navbar />
        </div>

        <div className="banner">
          <Banner />
        </div>

        <div className="row">
          <Row title="NETFLIX ORIGINALS" isLargeRow />
          <Row title="Trending Now" />
          <Row title="Top rated" />
          <Row title="Netflix Originals" />
        </div>

        <Switch>
          <Route path="/serie ">
            <Serie />
          </Route>
          <Route path="/season ">
            <Season />
          </Route>
          <Route path="/ep ">
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
