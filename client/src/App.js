import React from "react";
import Game from "./pages/Game";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/movies" component={Game} />
          <Route component={NoMatch} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;