import React from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import Logo from '../components/Logo';
import Forms from '../components/Form';

export default class daftar extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <Logo/>
        <Forms type="Daftar"/>
          <View style={styles.signupContent}>
              <Text style={styles.textSign}>Sudah Punya Akun. </Text>
              <Text style={styles.daftarButton}>Masuk</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ff9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5
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
