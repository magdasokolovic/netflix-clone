///// STYLING:
import "./sass/main.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Episode from "./pages/Episode.overview";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Player from "./pages/Player";
import Search from "./pages/Search";
import Season from "./pages/Season.overview";
import TvShow from "./pages/TvShows";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
      <Switch>
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
        <Route path="/tvshows">
          <TvShow />
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
