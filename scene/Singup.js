
import React, { Component } from 'react';
import{StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

import SingupForm from '../components/SingupForm';

export default class Singup extends Component {
    render () {
        return (
            <View style={style.container}>
                <SingupForm/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
        paddingLeft: 60,
        paddingLeft: 60,
        paddingRight: 60
    },
});

