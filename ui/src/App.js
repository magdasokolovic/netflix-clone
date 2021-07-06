import "./sass/main.scss";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Episode from "./pages/Episode.overview";
import Home from "./pages/Home";
// import Player from "./components/Player";
import Search from "./pages/Search";
import Season from "./pages/Season.overview";
import Series from "./pages/Series";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
      <div className="container">
        {/* <div className="row">
          <Row title="NETFLIX ORIGINALS" isLargeRow />
          <Row title="Trending Now" />
          <Row title="Top rated" />
        </div> */}

        {/* <Player/> */}

        <Navbar />
        <Switch>
          <Route path="/series">
            <Series />
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
