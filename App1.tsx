import {StyleSheet, Text, View, PermissionsAndroid, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './App/screens/Home';
import Button from './App/components/Button';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './App/screens/AccountScreen';
import IconAny from './App/components/IconAny';
import HomeScreen from './App/screens/HomeScreen';
// type define nhi kiya
// export type RootStackParamList = {
//   Home: undefined;
//   ListingEditing: undefined;
//   Account: undefined;
//   Message: undefined;
// };

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title={'Click'} onPress={() => navigation.navigate('Account')} />
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'dodgerblue'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={{}} />
  </Stack.Navigator>
);
const Tweets = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Tweets</Text>
      <Button
        title={'Click'}
        onPress={() => navigation.navigate('TweetDetails', {id: '1'})}
      />
    </View>
  );
};
const TweetDetails = ({route}) => (
  <View style={styles.container}>
    <Text style={styles.txt}>TweetDetail {route.params.id}</Text>
  </View>
);

const App1 = () => {
  return <HomeScreen />;
};

export default App1;

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
