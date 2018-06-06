import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ViewPagerAndroid, TouchableHighlight, TouchableOpacity } from 'react-native';


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
  } else if (menu === "menu1") {
    return (
      <ScrollView>
        <Text>Magic content of {menu}</Text>
      </ScrollView>
    );
  } else if (menu === "menu3") {
    return (

        <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle} key="1">
              <Text>First page 111</Text>
              <Text>dhskjdh skfhds fdfhdjkccc jkd jkd hjkufd hjuklk fd dmlf dl jdls jdls lkds lkfds jkldskjl jklds kldskjl klds klfdskllds klds klfklds klfdsk lfdkls kld kldklfu</Text>
            </View>
            <View style={styles.pageStyle} key="2">
              <Text>Second page 222</Text>
            </View>
        </ViewPagerAndroid>
    
    );
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
          <TouchableHighlight style={styles.menuitem1} onPress={() => this.changeMenu("menu1")}>
            <Text>Page 1</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.menuitem2} onPress={() => this.changeMenu("menu2")}>
            <Text>Page 2</Text>
          </TouchableOpacity>
          <TouchableHighlight style={styles.menuitem3} onPress={() => this.changeMenu("menu3")}>
            <Text>Page 3</Text>
          </TouchableHighlight>
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
    marginTop: 0,
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
    height: 85,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingBottom: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },

  viewPager: {
    flex: 1,
    backgroundColor: 'orange',
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
  }
});
