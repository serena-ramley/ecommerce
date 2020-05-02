import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component.jsx";

// const Detail = (props) => (
//   <div>
//     console.log(props)
//     <h1>DETAIL PAGE</h1>
//   </div>
// );

// const List = () => (
//   <div>
//     <h1>LIST PAGE</h1>
//   </div>
// );

const FlowersPage = () => (
  <div>
    <h1>FLOWERS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route exact path="/itemlist" component={List} />
        <Route exact={false} path="/itemlist/:topicid" component={Detail} /> */}
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
