import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, PixelRatio, FlatList, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("ShippingCrew.db")
export default class SignInScreen extends Component {
    constructor() {
        super()
        this.state = {
            value: 'input name',
            data: []
        }
    }


    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists crew (fname unique);', [], () => console.log("creeeated"), (a, b) => console.log(b)
            );
        });
        db.transaction(tx => {
            tx.executeSql('select fname from crew', [], (_, { rows }) =>
                this.setState({ data: rows._array })
            );
        });
    }
    handleChangeText(text) {
        this.state.value = text;
    }

    validation(text) {
        var flag = false;
        for (i = 0; i < this.state.data.length; i++) {
            if (text == 'admin') {
                console.log('welcome your highness...')
                this.props.navigation.navigate('Admin', { name: 'admin' })
                flag = true;
                break;
            }
            else if (text == this.state.data[i].fname) {
                console.log("success!")
                this.props.navigation.navigate('User', { name: this.state.value })
                flag = true;
            }
        }

        if (!flag) {
            console.log('user not found, please try again')
        }
    }


    render() {

        return (
            <>
                <View style={styles.container}>
                    <TextInput style={styles.center} placeholderTextColor='rgb(94,94,94)' placeholder={this.state.value} onChangeText={text => this.handleChangeText(text)} />
                    <TouchableOpacity onPress={() => this.validation(this.state.value)}><Text style={styles.center}>Sign in</Text></TouchableOpacity>
                </View>
            </>
        );
    }


}


const styles = StyleSheet.create({
    center: {
        color: 'rgb(150, 147, 100)',
        textAlign: 'center',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(15),
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
    },
    container: {
        backgroundColor: 'black',
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(130),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(130)
    }

});

/*
ADMIN PRIVLEDGES

        <TouchableOpacity onPress={() => this.select()}><Text style={styles.center}>Display users</Text></TouchableOpacity>
                <TextInput style={styles.center} defaultValue={this.state.name} onChangeText={text => this.handleChangeText2(text)} />
                <TouchableOpacity onPress={() => this.remove(this.state.name)}><Text style={styles.center}>Delete user</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.removetables()}><Text style={styles.center}>Delete table</Text></TouchableOpacity>


HONOR PAGE
            <View style={styles.container}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Honor')}><Image style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(110),
                    height: PixelRatio.getPixelSizeForLayoutSize(20),
                }}
                    source={require('../Img/Honor_team.png')}
                /></TouchableOpacity>
 </View>

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
                */