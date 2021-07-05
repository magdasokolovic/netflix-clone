import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Serie from "./pages/Serie.overview";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import "./sass/main.scss";
import Footer from "./components/Footer";

function App() {
  // for the search function:
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
