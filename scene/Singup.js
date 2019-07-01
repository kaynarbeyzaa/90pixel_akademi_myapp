
import React, { Component } from 'react';
import{
    StyleSheet,
    Text, 
    View, 
    TextInput, 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyButton from '../components/MyButton';

export default class Singup extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <View style={styles.singupform}>
                    <Text style={styles.title}>Sing Up</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Name"
                        underlineColorAndroid={'#fff'}/>
                    <TextInput style={styles.textinput}
                        placeholder="E-mail"
                        underlineColorAndroid={'#fff'}/>
                    <TextInput style={styles.textinput}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid={'#fff'}/>
                    <TextInput style={styles.textinput}
                        placeholder="Re-Password"
                        secureTextEntry={true}
                        underlineColorAndroid={'#fff'}/>
                    <MyButton test="Submit" onPress={Actions.Login}/>
                    
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
    singupform: {
        alignSelf: 'stretch',
        alignItems : 'center',
    },
    title: {
        fontSize: 30,
        color: '#3d055b',
        paddingBottom: 10,
        marginBottom: 30,
        borderBottomColor: '#fff',    
    },
    textinput: {
        alignSelf: 'stretch',
        height: 60,
        color: '#3d055b',
        marginBottom: 30,
        borderBottomColor: '#fff',   
    },
});

