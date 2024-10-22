import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NavigationTheme from './navigationTheme';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

    const StackNavigator = () => (
        <Stack.Navigator
        >
            <Stack.Screen name="welcome" component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
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