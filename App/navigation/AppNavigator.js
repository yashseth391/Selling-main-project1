import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingScreen from '../screens/ListingScreen';
import ListingEditingScreen from '../screens/ListingEditingScreen';
import AccountScreen from '../screens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import IconAny from '../components/IconAny';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    const Navigator = () => (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator} options={{
                headerShown: false
                , tabBarIcon: ({ color, size }) => <IconAny iconName={"home"} iconColor={color} iconSize={size} />
            }} />
            <Tab.Screen name="ListingEdit" component={ListingEditingScreen} options={{
                headerTitle: "Post Your Listing", headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => <IconAny iconName={"rebase-edit"} iconColor={color} iconSize={size} />
            }} />
            <Tab.Screen name="Account" component={AccountNavigator} options={{
                headerTitle: "User Screen", headerTitleAlign: "center"
                , tabBarIcon: ({ color, size }) => <IconAny iconName={"account-circle"} iconColor={color} iconSize={size} />
            }} />
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