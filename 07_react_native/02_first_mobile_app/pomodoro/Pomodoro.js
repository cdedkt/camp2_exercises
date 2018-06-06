import React from "react";
import PomodoroDisplay from "./PomodoroDisplay";

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.activeTime,
      pause: false,
      activeSessionLeft: 2,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 200);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  start = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.tick, 500);
    this.setState({
      timer: this.props.activeTime,
      pause: false,
      activeSessionLeft: 3,
      finished: false,
    });
  }

  tick = () => {
    if (this.state.timer > 0) {
      this.setState({timer: this.state.timer - 1});
    } else {
      const activeSessionLeft = this.state.pause ? this.state.activeSessionLeft : this.state.activeSessionLeft - 1;
      if (activeSessionLeft > 0) {
        this.setState({
          timer: this.state.pause ? this.props.activeTime : this.props.pauseTime,
          pause: !this.state.pause,
          activeSessionLeft: activeSessionLeft
        });
      } else {
        this.setState({
          activeSessionLeft: activeSessionLeft
        });
      }
    }
  }

  render() {
    return (
      <PomodoroDisplay
        timer={this.state.timer}
        started={this.state.activeSessionLeft > 0}
        pause={this.state.pause}
        start={this.start}
      />
    );
  }
}
