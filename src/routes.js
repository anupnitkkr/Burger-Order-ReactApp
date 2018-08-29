import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomePage";
import CheckoutContainer from "./containers/CheckoutPage";
import OrdersContainer from "./containers/OrdersContainerPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/" exact component={HomeContainer} />
          <Route path="/orders" exact component={OrdersContainer} />
        </Switch>
      </div>
    );
  }
}
export default App;
