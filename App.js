import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Custom Created Componenets
import Timer from './components/Timer'
import Menu from './components/Menu'

export default class App extends React.Component {
  render() {
    return (
      // Main View Container
      <View style={styles.container}>

        {/* Top Edge of Screen */}
        <View style={styles.edges} />
        
        {/* Timer for Player #1 */}
        <Timer styling={{...styles.clock, ...styles.playerOne}}/>

        {/* Centered Menu Row */}
        <Menu styling={{...styles.menuNavigation}}/>

        {/* Timer for Player #2 */}
        <Timer styling={{...styles.clock, ...styles.playerTwo}}/>

        {/* Top Edge of Screen */}
        <View style={styles.edges} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  // app layout its composed of 5 sections
  // the flex ratio of this app is 8:2:1 (clocks: menu: edges)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  edges: {
    flex: 1,
    backgroundColor: '#576574',
    width: '100%',
  },
  clock: {
    color: '#000',
    flex: 8,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerOne: {
    backgroundColor:  '#ff6b6b',
    transform: [{rotate: '180deg'}], // rotates the component upside down
  },
  playerTwo: {
    backgroundColor: '#48dbfb',
  },
  menuNavigation: {
    flex: 2,
  }
});
