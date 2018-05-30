import React, { Component } from 'react';
import './App.css';
import ChatBot from "./ChatBot"

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.refDom = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.refDom.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.refDom} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChat: true
    }
  }
  render() {
    return (
      <div className="App">
      <CustomTextInput/>
        <button onClick={() =>
          this.setState({displayChat: !this.state.displayChat})
        }>Toggle Chat</button>
        {this.state.displayChat
          ? <ChatBot />
          : null
        }
      </div>
    );
  }
}

export default App;
