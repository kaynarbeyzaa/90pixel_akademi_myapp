
import React, { Component } from 'react';
import{StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component{
    render (){
        return (
            <View style={style.container}>
                <View style={style.logocontainer}>
                    <Image 
                        style={style.logo}
                        source={require('../docs/spaceship.png')}
                    />
                </View>
                <TouchableOpacity onPress={() => 
                    Actions.Login({Singup:false})}
                    style={style.button}>
                    <Text style={style.buttontext}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                    Actions.Singup({Login:false})}
                    style={style.button}>
                    <Text style={style.buttontext}>Sing Up</Text>
                </TouchableOpacity>
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
    logocontainer: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
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