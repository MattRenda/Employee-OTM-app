import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, PixelRatio, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("ShippingCrew.db")
export default class SignUnScreen extends Component {
    constructor() {
        super()
        this.state = {
            value: 'input name',
            name: 'name',
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

    insert(fname) {
        db.transaction(
            tx => {
                console.log(tx.executeSql('insert into crew (fname) values (?)', [fname]));
            }
        )
    }

    remove(fname) {
        console.log(fname)
        db.transaction(tx => {
            tx.executeSql('DELETE FROM crew WHERE fname = ?', [fname], (_, { rows }) =>
                console.log(JSON.stringify(rows)), (a, b) => console.log(b)
            );
        });
    }

    removetables() {
        db.transaction(tx => {
            tx.executeSql('drop table crew', [], (_, { rows }) =>
                console.log(JSON.stringify(rows)), (a, b) => console.log(b)
            );
        });
    }

    select() {
        db.transaction(tx => {
            tx.executeSql('select fname from crew', [], (_, { rows }) =>
                this.setState({ data: rows._array })
            );
        });
        console.log(this.state.data)
    }
    handleChangeText(text) {
        this.state.value = text;
    }
    handleChangeText2(text) {
        this.state.name = text;
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.center}placeholderTextColor='rgb(94,94,94)' placeholder={this.state.value} onChangeText={text => this.handleChangeText(text)} />
                <TouchableOpacity onPress={() => this.insert(this.state.value)}><Text style={styles.center}>Sign up!</Text></TouchableOpacity>
            </View>

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
*/