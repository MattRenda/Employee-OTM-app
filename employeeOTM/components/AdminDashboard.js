import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, PixelRatio, FlatList, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("ShippingCrew.db")
export default class AdminDashboard extends Component {
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

    removeUser(fname) {
        console.log(fname)
        db.transaction(tx => {
            tx.executeSql('DELETE FROM crew WHERE fname = ?', [fname], (_, { rows }) =>
                console.log(JSON.stringify(rows)), (a, b) => console.log(b)
            );
        });
        db.transaction(tx => {
            tx.executeSql('select fname from crew', [], (_, { rows }) =>
                this.setState({ data: rows._array })
            );
        });
    }

    removeAllUsers() {
        db.transaction(tx => {
            tx.executeSql('drop table crew', [], (_, { rows }) =>
                console.log(JSON.stringify(rows)), (a, b) => console.log(b)
            );
        });
    }
    viewUser(name){
        console.log('viewing ' + name + ' analytics...')
    }

    target(userName){
        this.setState({name:userName})
    }
    render() {

        return (
            <View>

                <TouchableOpacity onPress={() => this.viewUser(this.state.name)}><Text style={styles.center}>View user</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.removeUser(this.state.name)}><Text style={styles.center}>Delete user</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.removeAllUsers()}><Text style={styles.center}>Delete table</Text></TouchableOpacity>

                <FlatList
                    style={{ backgroundColor: 'black', paddingBottom: PixelRatio.getPixelSizeForLayoutSize(150), paddingTop: PixelRatio.getPixelSizeForLayoutSize(20) }}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <TouchableOpacity onPress={() => this.state.name = item.fname}>
                                    <Text style={styles.text}>
                                        {item.fname}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )

                    }
                    }

                />
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
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(100),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(100)
    },
    text:{
        color: 'rgb(150, 147, 100)', textAlign: 'center', 
        fontSize: PixelRatio.getPixelSizeForLayoutSize(15), 
        padding: PixelRatio.getPixelSizeForLayoutSize(5) 
    }
});

