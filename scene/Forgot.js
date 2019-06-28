
import React, { Component } from 'react';
import{StyleSheet, Text, View, TextInput, Linking, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component{
    render (){
        return (
            <View style={style.container}>
                <Text style={style.text}>Enter your e-mail</Text>
                <TextInput style={style.textinput}
                    placeholder="E-mail"
                    underlineColorAndroid={'#fff'}/>
                <TouchableOpacity onPress={() => 
                    Actions.Login({Singup:false})}
                    style={style.button}>
                    <Text style={style.buttontext}>Continue</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems : 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
        paddingLeft: 60,
        paddingLeft: 60,
        paddingRight: 60
    },
    text: {
        color: '#3d055b',
        fontSize: 30,
        marginTop: 10,
        alignSelf: 'stretch',
        marginTop: 30,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 60,
        color: '#3d055b',
        marginBottom: 30,
        borderBottomColor: '#fff',   
    },
    button: {
        alignSelf: 'stretch',
        alignItems : 'center',
        padding : 20,
        backgroundColor : '#3d055b',
        marginTop: 30,
        borderRadius: 10,
    },
    buttontext: {
        color: '#fff',
        
    }
});