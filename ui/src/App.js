import "./App.css";

import { Link, Route, Router, Switch } from "react-router-dom";

import Episode from "./pages/Episode.overview";
import Home from "./pages/Home";
import Season from "./pages/Season.overview";
import Serie from "./pages/Serie.overview";

function App() {
  return (
    <div className="App">
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
