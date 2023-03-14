import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import CharacterScreen from "./screens/CharacterScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    title: 'Login',
                    headerShown: false
                }}/>
                <Stack.Screen name="Main" component={MainScreen} options={{
                    title: 'Main',
                    headerShown: false
                }}/>
                <Stack.Screen name="Character" component={CharacterScreen} options={{
                    title: 'Character',
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator