import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';

export default class Logo extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <Image style={{width: 95, height: 95}}
            source={require('../image/LOGO.png')}
            />
            <Text style={styles.logoText}>Selamat Datang Di Aplikasi Saya.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoText:{
    marginVertical:10,
    color:'#424242',
    fontSize:18
  }
});
