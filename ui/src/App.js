
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Series from "./pages/Series";
import Player from "./components/Player";

///// STYLING: 
import "./sass/main.scss";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>

        {/* {/* <div className="nav-active">
          <Navbar />
        </div> */}
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
          <Route path="/player">
          <Player/>
          </Route>
        </Switch>
        <Footer />

    </BrowserRouter>
  );
}

export default App;
