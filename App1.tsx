import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewImageScreen from './App/screens/ViewImageScreen';
import ListItemDeleteAction from './App/components/ListItemDeleteAction';
import MessageScreen from './App/screens/MessageScreen';
import ListItem from './App/components/ListItem';
import Screen from './App/screens/Screen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import ListingScreen from './App/screens/ListingScreen';

const App = () => {
  return (
    <View style={styles.main}>
      <MessageScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
