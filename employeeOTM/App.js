import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import HomeScreen from './components/HomeScreen'
import SignUpScreen from './components/SignUpScreen'
import SignInScreen from './components/SignInScreen'
import HonorScreen from './components/HonorScreen'
import SelectionScreen from './components/SelectionScreen'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    return <AppContainer 
   
    />;
  }

}
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  SignUp: {screen: SignUpScreen},
  SignIn: {screen: SignInScreen},
  Honor: {screen: HonorScreen},
  Selection: {screen: SelectionScreen},
  User:{screen:UserDashboard},
  Admin:{screen:AdminDashboard}
});


const AppContainer = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  

