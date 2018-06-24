import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  container2: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    textAlign: 'center',
    backgroundColor: "#0d0d0d",
  },
  timer: {
    color: "white",
    fontSize: 70,
  },

  timerLabel: {
    color: "black",
    fontSize: 20,
    backgroundColor: '#ddd',
  },

  timerListLabel: {
    width: "100%",
    color: "black",
    fontSize: 20,
    backgroundColor: '#ddd',
  },
  timerMessage: {
    color: "red",
    fontSize: 20,
    backgroundColor: "#0d0d0d",
  },

  buttonStart: {
    borderColor: "#1a361f",
    borderRadius: 162,
    borderWidth: 3,
    width: 162,
    height: 162,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerStart: {
    backgroundColor: "#1a361f",
    width: 150,
    height: 150,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStart: {
    color: "#4cda64",
    fontSize: 40,
  },

  buttonStop: {
    borderColor: "red",
    borderRadius: 162,
    borderWidth: 3,
    width: 162,
    height: 162,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerStop: {
    backgroundColor: "red",
    width: 150,
    height: 150,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStop: {
    color: "#4cda64",
    fontSize: 40,
  }
});

export default styles;
