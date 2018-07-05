import React, { Component } from 'react';
import {AppRegistry, Text,TextInput,TouchableOpacity,StyleSheet, View,Navigator,Image} from 'react-native';
export default class login extends Component{
static navigationOptions={
  title: 'admin'
};  

  render(){
    const navigation=this.props.navigation;
    return(
      <View style={styles.container}>
        
        <View style={{flexDirection: 'row', marginLeft:30, marginBottom:50}} >
          <Image source={require('./Logo.png')} style={styles.img}/>
          <Text style={styles.head}>Daily Schedule</Text>
        </View>

        <TouchableOpacity style={styles.b1}>
          <Text style={styles.bText} onPress={()=> navigation.navigate("addUser")}>New User Requests</Text>
        </TouchableOpacity>
              
        <TouchableOpacity style={styles.b1} onPress={()=> navigation.navigate("deleteUser")}>
          <Text style={styles.bText}>Delete User</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.b1}>
          <Text style={styles.bText} onPress={()=> navigation.navigate("update")}>Update User</Text>
        </TouchableOpacity>
              
        <TouchableOpacity style={styles.b1}>
          <Text style={styles.bText} onPress={()=> navigation.navigate("updateTimeTable")} >Update Timetable</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.b1} >
          <Text style={styles.bText} onPress={()=> navigation.navigate("leave")}>Leave Requests</Text>
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
  },
  img:{
    height:50,
    width:50
  },
  head:{
    fontSize:30,
    padding:5,
    color:'#ddd',
    textAlign:'center'
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
  or:{
    color:'#666'
  }
  })