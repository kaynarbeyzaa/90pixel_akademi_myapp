
import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyButton from '../components/MyButton';

export default class Home extends Component{
    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Enter your e-mail</Text>
                <TextInput style={styles.textinput}
                    placeholder="E-mail"
                    underlineColorAndroid={'#fff'}/>
                 <MyButton test="Continue" onPress={Actions.Approval}/>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems : 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
        paddingLeft: 60,
        paddingRight: 60
    },
    text: {
        color: '#3d055b',
        fontSize: 30,
        alignSelf: 'stretch',
        marginTop: 30,
        marginBottom: 30
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
        color: '#fff'  
    }
});