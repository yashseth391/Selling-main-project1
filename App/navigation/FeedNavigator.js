import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
    const Feed = () => (

    )
    return (
        <NavigationContainer>
            <Feed />
        </NavigationContainer>

    )
}

export default FeedNavigator

const styles = StyleSheet.create({})