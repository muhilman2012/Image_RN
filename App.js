/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Judul from './Components/Judul';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: '' +
    '',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
        <Text style={styles.instructions}>Nama : Muhamad Hilman</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Text style={styles.instructions}>No Absen : 22</Text>
        <Image
        style={{width: 250, height: 250}}
        source={require('./man.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
    margin: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
