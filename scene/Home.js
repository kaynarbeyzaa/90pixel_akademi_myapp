
import React, { Component } from 'react';
import{
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyButton from '../components/MyButton';

export default class Home extends Component{
    render (){
        return (
            <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../docs/spaceship.png')}
                    />
                </View>
                <MyButton test="Log In" onPress={Actions.Login}/>
                <MyButton test="Sing Up" onPress={Actions.Singup}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#c4c9e8',
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
});