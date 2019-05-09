import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// my custom components
import Timer from './components/Timer'
import Menu from './components/Menu'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer style={styles.playerOne}/>
        <Menu style={styles.menu}/>
        <Timer style={styles.playerTwo}/>
      </View>
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
