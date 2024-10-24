import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { version } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ListingScreen from '../screens/ListingScreen';
import ListingEditingScreen from '../screens/ListingEditingScreen';
import MessageScreen from '../screens/MessageScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: "slide_from_bottom", gestureEnabled: true, headerTitle: "", headerShown: false }} >
            <Stack.Screen name="Listings" component={ListingScreen} />
            <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
        </Stack.Navigator>
    );


}

export default FeedNavigator

const styles = StyleSheet.create({})