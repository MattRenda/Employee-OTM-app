import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, PixelRatio, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Directions } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
const welcome = new Audio.Sound();
welcome.loadAsync(require('../audio/mastery_emote_tier5.mp3'));


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    text: {
        textAlign: 'center',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(15),
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10)

    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(20),
        color: 'rgb(150, 147, 100)',
        backgroundColor: 'black'
    },

    img: {
        marginTop: PixelRatio.getPixelSizeForLayoutSize(60),
        width: PixelRatio.getPixelSizeForLayoutSize(60),
        height: PixelRatio.getPixelSizeForLayoutSize(120)
    }
});

class SelectionScreen extends Component {
    render() {

        return (
            <>
                <Text style={styles.title}>{this.props.navigation.state.params.name}</Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black'
                }} >
                    <Image source={require('../Img/league-underline.png')} />
                </View>

                <View style={styles.container}>
                    <TouchableOpacity onPress={async () => {
                            await welcome.replayAsync();
                        }}><Image style={styles.img}
                        source={require('../Img/Stayed-cool.png')}
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={async () => {
                            await welcome.replayAsync();
                        }}><Image style={styles.img}
                        source={require('../Img/Great-shottcalling.png')}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={async () => {
                            await welcome.replayAsync();
                        }}><Image style={styles.img}
                        source={require('../Img/GG.png')}
                    /></TouchableOpacity>
                </View>
            </>
        );
    }

}

export default SelectionScreen;