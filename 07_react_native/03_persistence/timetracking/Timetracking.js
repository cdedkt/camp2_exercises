import React from "react";
import { AsyncStorage, SafeAreaView, ScrollView, View, Text, TextInput, Dimensions, Button } from 'react-native';
import styles from "./styles";
import TimetrackingDisplay from "./TimetrackingDisplay";
import TimetrackingListDisplay from "./TimetrackingListDisplay";

const {height, width} = Dimensions.get('window');

export default class Timetracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      started: false,
      timerLabel: "",
      timerMessage: "",
      timerList: [],
    };
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("/Timetracking:list");
      if (value !== null) {
        this.setState({timerList: JSON.parse(value)});
      }
    } catch (error) {
      // Error retrieving data
    }
    this.intervalId = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  start = () => {
    if (this.state.timerLabel === "") {
      this.setState({
        timerMessage: "Please enter a label before starting...",
      });
    } else {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.tick, 500);
      this.setState({
        timer: 0,
        started: true,
      });
    }
  }

  saveTimerList = () => {
    AsyncStorage.setItem("/Timetracking:list", JSON.stringify(this.state.timerList));
    this.setState({
        timerMessage: "Save OK",
        timerLabel: "",
      });
  }

  deleteAllList = () => {
    this.setState({
        timerMessage: "Delete all OK",
        timerList: [],
      }, this.saveTimerList);
  }

  stop = () => {
    this.setState({
      started: false,
      timerMessage: "Saving in progress...",
      timerList: [...this.state.timerList, {label: this.state.timerLabel, value: this.state.timer}]
    }, this.saveTimerList);
  }

  tick = () => {
    if (this.state.started) {
      this.setState({timer: this.state.timer + 1});
    }
  }

  changeTimerLabel = (text) => {
    this.setState({
      timerLabel: text,
      timerMessage: "",
      });
  }



  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
        <ScrollView horizontal={true} pagingEnabled={true} >
          <View style={{width: width}}>
            <Text style={styles.title}>Time Tracking</Text>

            <View>
              <Text style={styles.timerLabel}>Enter a label for the timer :</Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.changeTimerLabel(text)}
                value={this.state.timerLabel}
              />
              <Text style={styles.timerMessage}>{this.state.timerMessage}</Text>
            </View>

            <TimetrackingDisplay
              timer={this.state.timer}
              started={this.state.started}
              start={this.start}
              stop={this.stop}
            />
          </View>

          <View style={{width: width}}>
            <TimetrackingListDisplay
              timerList={this.state.timerList}
            />
            <Button
              onPress={this.deleteAllList}
              title="Delete All"
              color="#841584"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
