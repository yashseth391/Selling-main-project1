import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageLibrary from './App/components/ImageLibrary';
import ListingEditingScreen from './App/screens/ListingEditingScreen';
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
    flex: 1,
  },
  txt: {
    fontSize: 20,
    color: 'white',
  },
});
