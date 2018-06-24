import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import displayTime from "./displayTime";

function displayTimerElement(timerElement, index) {
  return (
      <Text key={index} style={styles.timerListLabel}>{timerElement.label} - {displayTime(timerElement.value)} </Text>
  );
}

export default class TimetrackingListDisplay extends React.Component {

  render() {
    return (
      <View style={styles.container2}>
        <Text style={styles.title}>Tracking List</Text>
        { this.props.timerList.map((timerElement, index) =>
            displayTimerElement(timerElement, index)
          )
        }
      </View>
    );
  }
}
