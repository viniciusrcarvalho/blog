import React from "react";
import Navegation from "./components/navegation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageRenderer from "./page-renderer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navegation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route componet={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
