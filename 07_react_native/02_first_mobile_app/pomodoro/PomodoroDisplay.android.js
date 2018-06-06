import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import displayTime from "./displayTime";

function titleScreen(start) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Pomodoro</Text>
      <TouchableHighlight style={styles.button} onPress={start}>
        <Text style={styles.buttonText}>▶</Text>
      </TouchableHighlight>
    </View>
  );
}


function androidTimer(time) {
  const [minutes, seconds] = displayTime(time).split(":");
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timer}>
        <Text style={styles.minutes}>{minutes}</Text>
        <Text style={styles.seconds}>{seconds}</Text>
      </View>
    </View>
  )
}

function pauseDisplay(timer) {
  return (
    <View style={styles.titleScreen}>
      <Text style={styles.title}>Take a pause</Text>
      {androidTimer(timer)}
    </View>
  );
}

export default function(props) {
  return (
    <View style={styles.container}>
      {props.started
        ? props.pause
            ? pauseDisplay(props.timer)
            : androidTimer(props.timer)
        : titleScreen(props.start)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151b1e",
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
  timerContainer: {
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 300,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  minutes: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 90,
  },
  seconds: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 50,
    height: 78,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#5e97f6",
    borderRadius: 100,
    width: 100,
    height: 100,
    paddingLeft: 30,
    paddingTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 50,
  }
});
