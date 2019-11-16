import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, PixelRatio, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
  img: {
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(30),
  }
});

async function Welcome (){
  const welcome = new Audio.Sound();
  try {
    await welcome.loadAsync(require('../audio/File0115.mp3'));
    await welcome.playAsync();
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
  }
}

class HomeScreen extends Component {

 
  render() {


    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(80),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(130)
      }}>
        
       <Text>{Welcome().toString()}</Text> 
        
        <Image style={{
          width: PixelRatio.getPixelSizeForLayoutSize(170),
          height: PixelRatio.getPixelSizeForLayoutSize(20)
        }}
          source={require('../Img/AHhonor_system_logo.png')}
        />
        <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('SignIn')}><Image style={{
          width: PixelRatio.getPixelSizeForLayoutSize(70),
          height: PixelRatio.getPixelSizeForLayoutSize(20),
          marginLeft: PixelRatio.getPixelSizeForLayoutSize(10),
        }}
          source={require('../Img/Sign_in.png')}
        /></TouchableOpacity>

        <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('SignUp')}><Image style={{
          width: PixelRatio.getPixelSizeForLayoutSize(70),
          height: PixelRatio.getPixelSizeForLayoutSize(20),
        }}
          source={require('../Img/Sign_up.png')}
        /></TouchableOpacity>
      </View>
    );
  }

}

export default HomeScreen;

