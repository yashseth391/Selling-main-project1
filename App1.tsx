import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListingScreen from './App/screens/ListingScreen';
import AppText from './App/components/AppText';
import ViewImageScreen from './App/screens/ViewImageScreen';
import MessageScreen from './App/screens/MessageScreen';

const App1 = () => {
  return (
    <View style={styles.main}>
      <MessageScreen />
    </View>
  );
};

export default App1;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
