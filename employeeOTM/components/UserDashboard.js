import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, PixelRatio, FlatList, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("ShippingCrew.db")
export default class UserDashboard extends Component {
    constructor() {
        super()
        this.state = {
            value: 'input name',
            data: []
        }
    }



    render() {

        return (
            <>

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Honor',{ name: this.props.navigation.state.params.name })}><Image style={{
                        width: PixelRatio.getPixelSizeForLayoutSize(110),
                        height: PixelRatio.getPixelSizeForLayoutSize(20),
                    }}
                        source={require('../Img/Honor_team.png')}
                    /></TouchableOpacity>
                </View>
            </>
        );
    }


}



const styles = StyleSheet.create({
    center: {
        color: 'rgb(150, 147, 100)',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(15),
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(130),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(160)

    }

});

/*
ADMIN PRIVLEDGES

        <TouchableOpacity onPress={() => this.select()}><Text style={styles.center}>Display users</Text></TouchableOpacity>
                <TextInput style={styles.center} defaultValue={this.state.name} onChangeText={text => this.handleChangeText2(text)} />
                <TouchableOpacity onPress={() => this.remove(this.state.name)}><Text style={styles.center}>Delete user</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.removetables()}><Text style={styles.center}>Delete table</Text></TouchableOpacity>


HONOR PAGE

                */