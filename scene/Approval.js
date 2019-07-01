
import React, { Component } from 'react';
import{
    StyleSheet, 
    Text, 
    View
} from 'react-native';

export default class Home extends Component{
    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Check your e-mail</Text>
                <Text style={styles.text}>We've sent an email. Click the link in the email to reset your password.</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems : 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
        paddingLeft: 60,
        paddingRight: 60
    },
    title: {
        color: '#3d055b',
        fontSize: 30,
        alignSelf: 'stretch',
        marginTop: 30,
        marginBottom: 30
    },
    text: {
        color: '#3d055b',
        fontSize: 20,
        alignSelf: 'stretch',
        marginTop: 30,
        marginBottom: 30
    }

});