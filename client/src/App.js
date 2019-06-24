import React from "react";
import GameBoard from "./pages/GameBoard";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
        <Switch >
          <Route exact path="/" component={GameBoard} />
          <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;