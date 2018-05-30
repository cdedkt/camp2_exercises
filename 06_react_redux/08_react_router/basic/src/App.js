import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Login from './Login'
import BasicExample from './BasicExample';


class App extends Component {
  // https://reacttraining.com/react-router/web/example/auth-workflow
  constructor(props) {
    console.log("App CONSTRUCTOR props=", props);
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.login = this.login.bind(this);
  };

  login(username) {
    console.log("login username=", username);
    if (username === "moi") {
      console.log("login OK");
      this.setState({loggedIn: true});

    }
  };

  logout() {
    console.log("logout");
    this.setState({loggedIn: false});
    return true;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path={"/login"} render={(props) => (
            this.state.loggedIn ? (
              <Redirect to="/about"/>
            ) : (
              <Login login={this.login}/>
            )
          )}/>
          <Route path="/" render={(props) => (
            !(this.state.loggedIn) ? (
              <Redirect to="/login"/>
            ) : (
              <BasicExample {...props}/>
            )
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;
