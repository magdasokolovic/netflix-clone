
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Row from './components/Row'
import Home from "./pages/Home";
import Serie from "./pages/Serie.overview";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Player from "./components/Player";

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
        </div>

        <Player/>

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
