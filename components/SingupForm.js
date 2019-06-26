
import React from 'react';
import{StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class SingupForm extends React.Component {
    render(){
        return(
            <View style={style.singupform}>
                <Text style={style.title}>Sing Up</Text>
                <TextInput style={style.textinput}
                    placeholder="Name"
                    underlineColorAndroid={'#fff'}/>
                <TextInput style={style.textinput}
                    placeholder="E-mail"
                    underlineColorAndroid={'#fff'}/>
                <TextInput style={style.textinput}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid={'#fff'}/>
                <TextInput style={style.textinput}
                    placeholder="Re-Password"
                    secureTextEntry={true}
                    underlineColorAndroid={'#fff'}/>
                <TouchableOpacity onPress={() => 
                    Actions.Login()}
                    style={style.button}>
                    <Text style={style.buttontext}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    singupform: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 30,
        color: '#fff',
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