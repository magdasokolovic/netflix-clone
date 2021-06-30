import "./App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Serie from "./pages/Serie.overview";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
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
