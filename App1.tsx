import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import WelcomeScreen from './App/screens/WelcomeScreen';
import AuthNavigation from './App/navigation/AuthNavigation';
import AppNavigator from './App/navigation/AppNavigator';

// type define nhi kiya
// export type RootStackParamList = {
//   Home: undefined;
//   ListingEditing: undefined;
//   Account: undefined;
//   Message: undefined;
// };

const App1 = () => {
  return <AppNavigator />;
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
