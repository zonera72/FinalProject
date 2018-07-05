import React, { Component } from 'react';
import {AppRegistry, Text,TextInput,TouchableOpacity,StyleSheet,Image, View, Navigator} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './App.js';
export default class register extends Component{
    static navigationOptions={
        title: 'updateUser'
      };
constructor(props) {
 super(props);
 this.handleButton = this.handleButton.bind(this);
 this.props = {userName: 'jk',
  password: '123'
  }
 this.state = {userName:'',
  password:''
  }
 }  
handleButton() {
  
 }

  render(){
    const navigation = this.props.navigation;
    return(
      <View style={styles.container}>

       <View style={{flexDirection: 'row', marginLeft:30}} >
          <Image source={require('./Logo.png')} style={styles.img}/>
          <Text style={styles.head}>Daily Schedule</Text>
        </View>
       
        <TextInput underlineColorAndroid="transparent"  placeholder='First Name' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(userName) => this.setState({userName:userName})}/>

        <TextInput underlineColorAndroid="transparent"  placeholder='Last Name' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(password) =>this.setState({ password:password})}/>
        
        <TextInput underlineColorAndroid="transparent"  placeholder='Roll Number' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(userName) => this.setState({userName:userName})}/>

        <TextInput underlineColorAndroid="transparent"  placeholder='CNIC' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(password) =>this.setState({ password:password})}/>
        
        <TextInput underlineColorAndroid="transparent"  placeholder='Password' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(userName) => this.setState({userName:userName})}/>

        <TextInput underlineColorAndroid="transparent"  placeholder='Confirm Password' placeholderTextColor='rgba(255,255,255,0.7)' style={styles.input}
          onChangeText={(password) =>this.setState({ password:password})}/>
        

        <TouchableOpacity style={styles.b1}>
          <Text style={styles.bText}>Update</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.b1}>
          <Text style={styles.bText} onPress={()=>navigation.navigate("adm")}>Go Back</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 20,
    backgroundColor:'#3498db',
    height:'100%',
    width:'100%',
  },
  img:{
    height:50,
    width:50,
  },
  head:{
    fontSize:30,
    paddingVertical:30,
    color:'#ddd',
    textAlign:'center'
  },
  input:{
    height:40,
    marginBottom:20,
    backgroundColor:'rgba(255,255,255,0.2)',
    paddingHorizontal:10,
    color:'#FFF',
    borderRadius:10,
  },
  b1:{
    paddingVertical: 10,
    backgroundColor:'#2980b9',
    borderRadius:15,
    marginTop:10
  },
  bText:{
    textAlign:'center',
    color:'#FFF'
  },
  })