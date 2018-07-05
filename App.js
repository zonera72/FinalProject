import React, { Component } from 'react';
import {AppRegistry, Text,TextInput,TouchableOpacity,StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import login from './login';
import register from './register';
import findClass from './findClass';
import admin from './admin';
import userRequests from './userRequests';
import deleteUser from './deleteUser';
import leaveRequests from './leaveRequests';
import updateUser from './updateUser';
import updateTimeTable from './updateTimeTable';
import requestLeave from './requestLeave';

const MyStack = StackNavigator({
  log: {screen: login,
  navigationOptions:{
    header: null,
  }},
  
  reg: {screen: register,
    navigationOptions:{
      header: null,
    }},
    
  adm: {
    screen: admin,
    navigationOptions:{
      header: null,
    }},
  find:{
    screen: findClass,
    navigationOptions:{
      header: null,
    }},
  addUser:{
    screen: userRequests,
    navigationOptions:{
      header:null,
  }},
  deleteUser:{
    screen:deleteUser,
    navigationOptions:{
      header:null,
  }},
  leave:{
    screen: leaveRequests,
    navigationOptions:{
      header:null,
    }},
    update:{
      screen:updateUser,
      navigationOptions:{
        header:null,
      }},
    updateTimeTable:{
      screen: updateTimeTable,
      navigationOptions:{
        header:null,
      }},
      requestLeave:{
        screen:requestLeave,
        navigationOptions:{
          header:null,
        }},



});
export default class App extends React.Component{
  render(){
    return(
      <MyStack/>
    )
  }
}
