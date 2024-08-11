import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import AppTextInput from './App/components/AppTextInput';
import AppPicker from './App/components/AppPicker';
import LoginScreen from './App/screens/LoginScreen';
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
      <LoginScreen />
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
