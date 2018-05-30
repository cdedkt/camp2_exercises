import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import Counter from "./Counter"
import CounterButton from "./CounterButton"

console.log("CounterButton=", CounterButton);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={this.props.counterValue}/>
        <CounterButton/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counterValue: state.counterValue }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
