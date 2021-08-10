import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#0A1033',
                },
            }}
            
        >
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}