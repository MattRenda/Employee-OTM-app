import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, PixelRatio, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("ShippingCrew.db")



class HonorScreen extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loggedInAs: ''
        };
    }

    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists crew (fname unique);', [], () => console.log("creeeated"), (a, b) => console.log(b)
            );
        });
        db.transaction(tx => {
            tx.executeSql('select fname from crew', [], (_, { rows }) =>
                this.setState({data:rows._array})  
            );
        });
        this.setState({loggedInAs:this.props.navigation.state.params.name})

    }


    render() {

        return (
            <>
            <Text>logged in as: {this.state.loggedInAs}</Text>
                 <FlatList
                    style={{ backgroundColor: 'black', paddingBottom: PixelRatio.getPixelSizeForLayoutSize(15), paddingTop: PixelRatio.getPixelSizeForLayoutSize(15) }}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Selection', { name: item.fname })}>
                                    <Text style={{ color: 'rgb(150, 147, 100)', textAlign:'center',fontSize:PixelRatio.getPixelSizeForLayoutSize(15) ,padding: PixelRatio.getPixelSizeForLayoutSize(5)}}>
                                        {item.fname}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )

                    }
                    }

                />
            </>
        );
    }
}



export default HonorScreen;