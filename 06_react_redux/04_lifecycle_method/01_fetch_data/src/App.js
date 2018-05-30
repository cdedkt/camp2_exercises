import React, { Component } from 'react';
import './App.css';

function fetchDog() {
  return fetch(
    `https://random.dog/woof.json`,
    {method: "GET"}
  )
  .then((response) => response.json());
}

class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  nextImage() {
    fetchDog()
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
        {this.state.url
          ? <img src={this.state.url}/>
          : null
        }

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
