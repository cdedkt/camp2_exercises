import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import displayTime from "./displayTime";


function displayTimer(started, timer, action) {
  let buttonLabel = "";
  let buttonStyle = "";
  if (started) {
    buttonLabel = "Stop";
  } else {
    buttonLabel = "Start";
  }

  return (
    <View style={styles.titleScreen}>
      <Text style={styles.timer}>{displayTime(timer)}</Text>
      <TouchableHighlight style={started?styles.buttonStop:styles.buttonStart} onPress={action}>
        <View style={started?styles.buttonContainerStop:styles.buttonContainerStart}>
          <Text style={started?styles.buttonTextStop:styles.buttonTextStart}>{buttonLabel}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default class TimetrackingDisplay extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      {this.props.started
        ? displayTimer(this.props.started, this.props.timer, this.props.stop)
        : displayTimer(this.props.started, this.props.timer, this.props.start)
      }
      </View>
    );
  }
}
