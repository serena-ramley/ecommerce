import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const CatsPage = () => (
  <div>
    <h1>CATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={false} path="/hats" component={CatsPage} />
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
