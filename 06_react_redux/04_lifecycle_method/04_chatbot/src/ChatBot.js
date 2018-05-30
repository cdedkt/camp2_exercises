import React, { Component } from "react";

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.refDom = React.createRef();
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      messages: [],
      indice: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    const linkInterval = setInterval(this.sayHello, 200);
    this.setState({linkInterval: linkInterval});
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.refDom.current.scrollTop=this.refDom.current.scrollHeight;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.state.linkInterval);
  }

  sayHello() {
    console.log("sayHello");
    this.setState({
      messages: [...this.state.messages, "Hey there! " + this.state.indice],
      indice: this.state.indice + 1,
    });
  }
  render() {
    return (
      <div ref={this.refDom} style={{height:300, overflow:"auto"}}>
      {this.state.messages.map((message, index) => {
          return(
            <div
              key={index}
            >
            {message}
            </div>
          )
        }
      )}
      <br/>
      APRES DIV
      </div>
    )
  }
}

export default ChatBot;
