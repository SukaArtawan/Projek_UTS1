import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
  } from 'react-native';

export default class Form extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          placeholderTextColor="#9E9E9E"
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#9E9E9E"
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:45,
    marginRight:45
  },
  inputBox:{
    width:250,
    backgroundColor:'#EEEEEE',
    borderRadius:25,
    paddingHorizontal:17,
    fontSize:16,
    color:'#9E9E9E',
    marginVertical:8,
    padding:10
  },
  button:{
    width:250,
    backgroundColor:'#BDBDBD',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:9
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#424242',
    textAlign:'center'
  }
});
