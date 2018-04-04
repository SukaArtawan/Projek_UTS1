import React from 'react';
import {
  StyleSheet,
  View
  } from 'react-native';

//import Routes from './src/Routes';
import Login from './src/pages/logins';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
