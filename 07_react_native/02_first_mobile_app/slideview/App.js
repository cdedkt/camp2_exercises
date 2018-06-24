import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';

const {height, width} = Dimensions.get('window');


export default class App extends React.Component {
  render() {


    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
      <View style={styles.container}>
        <Text>windowWidth = {width}</Text>
        <Text>mon texte du haut qui n est pas scrollable mais revient à la ligne si besoin et la la la</Text>
        <ScrollView horizontal={true} pagingEnabled={true} style={styles.scroll}>
          <View style={styles.scrollblock}>
            <Text style={{fontSize:20, textAlign: 'center'}} >Scroll Me To See The Effect</Text>
            <Image source={require('./images/ic_3d_rotation.png')} />
          </View>
          <View style={styles.scrollblock}>
            <Image source={require('./images/ic_alarm.png')} />
            <Image source={require('./images/ic_insert_emoticon.png')} />
            <Image source={require('./images/ic_android.png')} />
          </View>
          <View style={styles.scrollblock}>
            <Image source={require('./images/ic_face.png')} />
            <Text style={{fontSize:20, textAlign: 'center'}} >Scroll View Ends Here.</Text>
          </View>

        </ScrollView>
        <Text>mon texte du bas qui n est pas scrollable mais revient à la ligne si besoin et la la la</Text>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#ee1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scroll: {
    maxHeight: 300,
  },
  scrollblock: {
    width: width,
  },
});
