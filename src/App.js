import React, { Component } from "react";
import Movies from "./compnents/Movies";
import Navbar from "./compnents/Navbar";
import Rentals from "./compnents/Rentals";
import NotFound from "./compnents/NotFound";
import MovieForm from "./compnents/MovieForm";
import LoginForm from "./compnents/LoginForm";
import Customers from "./compnents/Customers";
import RegisterForm from "./compnents/RegisterForm";
// import NewMovie from "./compnents/NewMovie";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/movies" component={Movies} />
            <Route path="/" component={Movies} />
            <Redirect to="/not-found" />
            <Redirect from="/" exact to="/movies" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
