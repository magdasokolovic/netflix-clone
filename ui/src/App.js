import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import Search from "./pages/Search";
// import Series from "./pages/Series";
import Player from "./components/Player";
// import Footer from "./components/Footer";
import TvShow from "./pages/TvShows";
import Movies from "./pages/Movies";

///// STYLING:
import "./sass/main.scss";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
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
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/player">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
