
import React from 'react'
import {
    Router, 
    Scene, 
    Stack
} from 'react-native-router-flux'

import Login from '../scene/Login'
import Singup from '../scene/Singup'
import Home from '../scene/Home'
import Chat from '../scene/Chat'
import Contacts from '../scene/Contacts';
import Forgot from '../scene/Forgot';
import Approval from '../scene/Approval';

const Routes = () => {
    return (
        <Router>
            <Stack key = "root">
                <Scene
                    key= "Home"
                    title= "Home"
                    component= {Home}
                />
                <Scene
                    key= "Login"
                    title= "Log In"
                    component= {Login}
                />
                <Scene
                    key= "Singup"
                    title= "Sing Up"
                    component= {Singup}
                />
                <Scene
                    key= "Contacts"
                    title= "Contacts"
                    component= {Contacts}
                />
                <Scene
                    key= "Chat"
                    title= "Chat"
                    component= {Chat}
                />
                <Scene
                    key= "Forgot"
                    title= "Forgot"
                    component= {Forgot}
                />
                <Scene
                    key= "Approval"
                    title= "Approval"
                    component= {Approval}
                />
            </Stack>
        </Router>
    )
}

export default Routes;