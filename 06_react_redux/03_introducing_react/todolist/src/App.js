import React, { Component } from 'react';
import './App.css';

import todos from './dataTodos';
import TableTodos from './TableTodos';


class App extends Component {


  render() {
    return (
      <div>
        <TableTodos todos={todos}/>
      </div>
    );
  }
}

export default App;
