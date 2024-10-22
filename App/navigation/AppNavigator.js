import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingScreen from '../screens/ListingScreen';
import ListingEditingScreen from '../screens/ListingEditingScreen';
import AccountScreen from '../screens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    const Navigator = () => (
        <Tab.Navigator>
            <Tab.Screen name="Listing" component={ListingScreen} />
            <Tab.Screen name="ListingEdit" component={ListingEditingScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
    return (
        <NavigationContainer >
            <Navigator />
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})