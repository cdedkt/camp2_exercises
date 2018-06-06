import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import displayTime from "./displayTime";


function titleScreen(finished, start) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Pomodoro</Text>
      <TouchableHighlight style={styles.button} onPress={start}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

function pauseDisplay(timer) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Take a pause</Text>
      <Text style={styles.timer}>{displayTime(timer)}</Text>
    </View>
  );
}

export default class PomodoroDisplay extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.started
          ? this.props.pause
              ? pauseDisplay(this.props.timer)
              : <Text style={styles.timer}>{displayTime(this.props.timer)}</Text>
          : titleScreen(this.props.finished, this.props.start)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  titleScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 60,
  },
  timer: {
    color: "white",
    fontFamily: "Courier",
    fontSize: 70,
  },
  button: {
    borderColor: "#1a361f",
    borderRadius: 162,
    borderWidth: 3,
    width: 162,
    height: 162,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#1a361f",
    width: 150,
    height: 150,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#4cda64",
    fontSize: 40,
  }
});
