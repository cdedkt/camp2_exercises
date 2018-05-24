import React, { Component } from 'react';
import './App.css';

class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  nextImage() {
    fetch(
      `https://random.dog/woof.json`,
      {method: "GET"}
    )
      .then((response) => response.json())
      .then((dog) => {
        console.log("dog.url=",dog.url);
        this.setState({
          url: dog.url,
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <br/>
        <img src={this.state.url}/>
        <br/>
        <br/>
        <button onClick={() => this.nextImage()}>next</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.nextImage();
  }
}

export default DogApp;
