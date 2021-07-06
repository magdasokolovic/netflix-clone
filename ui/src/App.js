import { BrowserRouter, Switch, Route } from "react-router-dom";
import Row from "./components/Row";
import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import Player from "./components/Player";
import Search from "./pages/Search";
import "./sass/main.scss";
import Footer from "./components/Footer";
import TvShow from "./pages/TvShows";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
      <div className="container">
        {/* <div className="nav-active">
          <Navbar />
        </div>

        <div className="banner">
          <Banner />
        </div>

        <div className="row">
          <Row title="NETFLIX ORIGINALS" isLargeRow />
          <Row title="Trending Now" />
          <Row title="Top rated" />
        </div> */}

        {/* <Player/> */}

        <Navbar />
        <Switch>
          <Route path="/tvshows">
            <TvShow />
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
          <Route path="/player">{/* <Player /> */}</Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
