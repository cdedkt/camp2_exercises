import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pomodoro from './Pomodoro';

export default class App extends React.Component {
  render() {
    return (
      <Pomodoro activeTime={4} pauseTime={2} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
