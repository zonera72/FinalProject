import React, { Component } from 'react';
import {AppRegistry, Text,TextInput,TouchableOpacity,StyleSheet,Image, View,Navigator} from 'react-native';
import register from './register';
export default class login extends Component{
static navigationOptions={
  title: 'findClass'
};


render(){
  const navigation=this.props.navigation;
  return(

    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', marginLeft:30, marginBottom:50}} >
          <Image source={require('./Logo.png')} style={styles.img}/>
          <Text style={styles.head}>Daily Schedule</Text>
        </View>

      <TextInput underlineColorAndroid="transparent"  placeholder='From Time' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
        onChangeText={(userName) => this.setState({userName:userName})}/>

      <TextInput underlineColorAndroid="transparent" placeholder='To Time' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
        onChangeText={(password) =>this.setState({ password:password})}/>
      
      <TouchableOpacity style={styles.b1}>
        <Text style={styles.bText} onPress={()=>navigation.navigate("requestLeave")} >Find Class</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.b1} onPress={()=>navigation.navigate("log")}>
        <Text style={styles.bText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    padding: 20,
    backgroundColor:'#3498db',
    height:'100%',
    width:'100%',
    justifyContent:'center'
  },
  img:{
    height:50,
    width:50,
  },
  head:{
    fontSize:30,
    padding:5,
    color:'#ddd',
    textAlign:'center'
  },
  input:{
    height:40,
    marginBottom:10,
    backgroundColor:'rgba(255,255,255,0.2)',
    paddingHorizontal:10,
    color:'#FFF',
    borderRadius:10,
  },
  b1:{
    paddingVertical: 10,
    backgroundColor:'#2980b9',
    borderRadius:15,
    marginTop:20
  },
  bText:{
    textAlign:'center',
    color:'#FFF'
  },
  or:{
    color:'#666'
  }
}
)