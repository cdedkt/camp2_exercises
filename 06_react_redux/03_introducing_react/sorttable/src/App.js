import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import products from './dataProducts';
import TableProducts from './TableProducts';

class App extends Component {
  render() {
    return (
      <div>
        <TableProducts products={products}/>
      </div>
    );
  }
}

export default App;
