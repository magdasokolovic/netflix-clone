import "./sass/main.scss";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Episode from "./pages/Episode.overview";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Season from "./pages/Season.overview";
import Serie from "./pages/Serie.overview";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (<BrowserRouter><div className = "container"><Navbar /><Switch>
          <Route path = "/serie"><Serie />
          </Route>
          <Route path="/season ">
           < Season /></Route>
          <Route path="/ep ">
                       < Episode />
          </Route>
          <Route path="/search / ">
               < Search search = { search } />
          </Route>
          <Route exact path = "/"><Home /></Route>
        </Switch><Footer />
          </div>
    </BrowserRouter>);
}

export default App;
