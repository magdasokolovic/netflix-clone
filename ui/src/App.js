import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Serie from "./pages/Serie.overview";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import "./sass/main.scss";
import Banner from "./components/Banner";

// import data from './mockData.js/data.json'

function App() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
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
          <Route path="/serie">
            <Serie />
          </Route>
          <Route path="/season">
            <Season />
          </Route>
          <Route path="/ep">
            <Episode />
          </Route>
          <Route path="/search/">
            <Search search={search} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
