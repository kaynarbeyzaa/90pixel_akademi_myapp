
import React, { Component } from 'react';
import{StyleSheet, Text, View, TextInput, Linking, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
    
    render(){
        return(
            
            <View style={style.loginform}>
                <Text style={style.title}>Log In</Text>
                <TextInput style={style.textinput}
                    placeholder="E-mail"
                    underlineColorAndroid={'#fff'}/>
                <TextInput style={style.textinput}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid={'#fff'}/>
                <TouchableOpacity onPress={() => 
                    Actions.Contacts()}
                    style={style.button}>
                    <Text style={style.buttontext}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                    Actions.Forgot()}>
                    <Text style={style.link}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const style = StyleSheet.create({
    loginform: {
        alignSelf: 'stretch',
        alignItems : 'center',
    },
    link: {
        color: '#3d055b',
        fontSize: 15,
        textDecorationLine: 'underline',
        marginTop: 10,
        alignSelf: 'stretch',

    },
    title: {
        fontSize: 30,
        color: '#3d055b',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#fff',   
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