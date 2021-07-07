import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
// import Player from "./components/Player";
import Search from "./pages/Search";
import TvShow from "./pages/TvShows";
import Movies from "./pages/Movies";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
      <div className="container">
        {/* <Player/> */}

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
          <Route path="/player">{/* <Player /> */}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
