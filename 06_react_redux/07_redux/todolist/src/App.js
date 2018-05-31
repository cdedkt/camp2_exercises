import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';

import TableTodos from './modules/todo/TableTodos';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <span className="row">SortedBy : {this.props.sortedBy}</span>
        <span className="row">SortedDesc : {this.props.sortedDesc ? "DESC" : "ASC"}</span>
        <span className="row">Error : {this.props.error}</span>
        <TableTodos/>
      </div>
    );
  }
}


function mapStateToProps(stateRedux) {
  return {
    sortedBy: stateRedux.sortedBy,
    sortedDesc: stateRedux.sortedDesc,
    error: stateRedux.error,
  }
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
