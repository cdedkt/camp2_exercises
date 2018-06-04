import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';


function getContent(menu) {
  if (menu === "menu2") {
    return (
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changesdfd alex make will automatically reload.</Text>
        <Text style={{fontSize:96}}>Scroll me please</Text>
        <Image source={require('./public/chat.jpeg')} style={styles.stretch} />
        <Image source={require('./public/chat.jpeg')} style={styles.stretch} />
        <Image source={require('./public/chat.jpeg')} style={styles.stretch} />
        <Image source={require('./public/chat.jpeg')} style={styles.stretch} />
        <Image source={require('./public/chat.jpeg')} style={styles.stretch} />
        <Text style={{fontSize:96}}>Scroll me toto</Text>
        <Image source={require('./public/chat.jpeg')} style={{height:200}} />
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <Text>Magic content of {menu}</Text>
      </ScrollView>
    )
  }

}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "menu1",
    };
    this.changeMenu = this.changeMenu.bind(this);
  }

  changeMenu(pmenu) {
    console.log("pmenu=",pmenu);
    this.setState({
      menu: pmenu,
    })
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{this.state.menu} is selected</Text>
        </View>

        {getContent(this.state.menu) }


        <View style={styles.menu}>
          <View style={styles.menuitem1}>
            <Button title="Page 1" onPress={() => this.changeMenu("menu1")} />
          </View>
          <View style={styles.menuitem2} >
            <Button title="Page 2" onPress={() => this.changeMenu("menu2")} />
          </View>
          <View style={styles.menuitem3}>
            <Button title="Page 3" onPress={() => this.changeMenu("menu3")} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 35,
    marginBottom: 0,
  },
  menu: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 0,
    marginBottom: 0,
    height: 80,
  },
  menuitem1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  menuitem2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  menuitem3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  stretch: {
    width: 50,
    height: 100
  },
  headerView: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingBottom: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
