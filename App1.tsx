import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewImageScreen from './App/screens/ViewImageScreen';
import ListItemDeleteAction from './App/components/ListItemDeleteAction';
import MessageScreen from './App/screens/MessageScreen';
import ListItem from './App/components/ListItem';
import Screen from './App/screens/Screen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import ListingScreen from './App/screens/ListingScreen';
import AccountScreen from './App/screens/AccountScreen';
import IconAny from './App/components/IconAny';

const App = () => {
  return (
    <View style={styles.main}>
      <View>
        <ListItem
          title={'my Title'}
          subtitle={''}
          onPressAction={() => console.log('on press')}
          deleteFunction={''}
          image={''}
          ImageComponent={<IconAny iconName={'email'} />}
        />
      </View>
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
