import React, { Component } from 'react';
import './App.css';
import Book from "./Book"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "978059651774",
    }
  }
  handleChange = (event) => {
    console.log("handleChange");
    this.setState({isbnTemp: event.target.value});
  }
  handleSearch = () => {
    console.log("handleSearch");
    this.setState({isbn: this.state.isbnTemp});
  }

  componentDidMount() {
    this.setState({isbnTemp: this.state.isbn});
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.isbnTemp} onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <Book isbn={this.state.isbn} />
        <br/>
        <div>this.state.isbnTemp = {this.state.isbnTemp}</div>
        <div>this.state.isbn = {this.state.isbn}</div>
      </div>
    );
  }
}

export default App;
