import {StyleSheet, Text, View, PermissionsAndroid, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListingEditingScreen from './App/screens/ListingEditingScreen';

import ImageInput from './App/components/ImageInput';
import Location from './App/components/Location';
import WelcomeScreen from './App/screens/WelcomeScreen';

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

const App1 = () => {
  return (
    <View>
      <ListingEditingScreen />
    </View>
  );
};

export default App1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    height: 40,
    width: 130,
    margin: 10,
  },
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
    color: 'white',
  },
});
