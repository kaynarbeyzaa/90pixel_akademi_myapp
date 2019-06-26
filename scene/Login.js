
import React, { Component } from 'react';
import{StyleSheet, View } from 'react-native';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    render () {
        return (
            <View style={style.container}>
                <LoginForm/>
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

