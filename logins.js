import React from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import Logo from '../components/Logo';
import Forms from '../components/Form';

export default class logins extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <Logo/>
        <Forms type="Login"/>
          <View style={styles.signupContent}>
              <Text style={styles.textSign}>Belum punya Akun ? </Text>
              <Text style={styles.daftarButton}>Daftar</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5722',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupContent:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection:'row',
    paddingVertical:16
  },
  textSign:{
    color:'#757575',
    fontSize:17
  },
  daftarButton:{
    color:'#212121',
    fontSize:16,
    fontWeight:'500'
  }
});
