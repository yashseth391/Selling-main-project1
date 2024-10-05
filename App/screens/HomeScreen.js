import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './AccountScreen';
import ListingEditingScreen from './ListingEditingScreen';
import MessageScreen from './MessageScreen';

const HomeScreen = () => {
    const Tab = createBottomTabNavigator();
    const TabNavigator = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="ItemPosting" component={ListingEditingScreen} />
                <Tab.Screen name="MyAccount" component={AccountScreen} />

            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        height: 40,
        width: 130,
        margin: 10,
    },
    container: {},
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    main: {
        backgroundColor: 'white',
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txt: {
        fontSize: 20,
        color: 'black',
        alignItems: 'center',
    },
});
