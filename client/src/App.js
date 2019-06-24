import React from "react";
import Movies from "./pages/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:id" component={Details} />
          <Route component={NoMatch} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;