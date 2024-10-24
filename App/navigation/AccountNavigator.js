import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
const Stack = createNativeStackNavigator();
const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: true, headerShown: false }}>
            <Stack.Screen name="Account1" component={AccountScreen} />
            <Stack.Screen name="Messages" component={MessageScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator

const styles = StyleSheet.create({})