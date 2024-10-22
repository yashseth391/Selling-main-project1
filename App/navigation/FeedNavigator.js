import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ListingScreen from '../screens/ListingScreen';
import ListingEditingScreen from '../screens/ListingEditingScreen';

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Listings" component={ListingScreen} />
            <Stack.Screen name="ListingDetail" component={ListingEditingScreen} />
        </Stack.Navigator>
    );


}

export default FeedNavigator

const styles = StyleSheet.create({})