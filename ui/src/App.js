
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Row from './components/Row'
import Home from "./pages/Home";
import Serie from "./pages/Serie.overview";
import Season from "./pages/Season.overview";
import Episode from "./pages/Episode.overview";
import './sass/main.scss'

// import data from './mockData.js/data.json'

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Row title="Netflix Originals" />
        <Row title="Trending Now" />

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
    </BrowserRouter>
  );
}

export default App;
