import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NavigationTheme from './NavigationTheme';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    const StackNavigator = () => (
        <Stack.Navigator
        >
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );

    return (
        <NavigationContainer theme={NavigationTheme}>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})