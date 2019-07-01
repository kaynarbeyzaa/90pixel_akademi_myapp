
import React, { Component } from 'react';
import{
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyButton from '../components/MyButton';

export default class Login extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.loginform}>
                    <Text style={styles.title}>Log In</Text>
                    <TextInput style={styles.textinput}
                        placeholder="E-mail"
                        underlineColorAndroid={'#fff'}/>
                    <TextInput style = {styles.textinput}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid={'#fff'}/>
                    <MyButton test="Log In" onPress={Actions.Contacts}/>
                    <TouchableOpacity 
                        onPress={() => 
                            Actions.Forgot()}>
                        <Text style={styles.link}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
        paddingLeft: 60,
        paddingRight: 60
    },
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

