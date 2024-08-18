import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import AppTextInput from './App/components/AppTextInput';

import ListingEditingScreen from './App/screens/ListingEditingScreen';
import RegisterScreen from './App/screens/RegisterScreen';
import MessageScreen from './App/screens/MessageScreen';
import Testing from './App/screens/Testing';
import ListingScreen from './App/screens/ListingScreen';
type Category = {
  label: string;
  value: number;
};
const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

const App = () => {
  return (
    <View style={styles.main}>
      <ListingEditingScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: 10,
  },
});
