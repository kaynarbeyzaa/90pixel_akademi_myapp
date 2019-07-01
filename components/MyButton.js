
import React, { Component } from 'react';
import{
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

    const MyButton = ({ 
            onPress,
            test,
    }) => {
            return(
                <TouchableOpacity 
                    onPress={onPress}
                    style = {styles.button}>
                    <Text style = {styles.buttontext}>{test}</Text>
                </TouchableOpacity>
            );
        };

const styles = StyleSheet.create({
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

export default MyButton;