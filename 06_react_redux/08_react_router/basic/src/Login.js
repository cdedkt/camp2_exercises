import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
