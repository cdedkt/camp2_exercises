import React, { Component } from "react";
import { connect } from "react-redux";

class CounterButton extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.counterDown}>Down</button>
        <button onClick={this.props.counterUp}>Up</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    counterDown: () => dispatch({type: "COUNTER_DOWN"}),
    counterUp: () => dispatch({type: "COUNTER_UP"}),
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(CounterButton);
export default Connected;
