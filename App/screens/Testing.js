import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  ScrollView,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require("../assets/owner1.webp")
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require("../assets/owner1.webp")
  },
  {
    id: 3,
    title: 't3',
    description: 'd3',
    image: require("../assets/owner1.webp")
  }
]
const Testing = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    //Delete the Mesaage from Future

    setMessages(messages.filter(m => m.id !== message.id));
    //Delting from server in future
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Tasks</Text>
      <ScrollView>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            title={message.title}
            subTitle={message.description}
            image={message.image}
            onPress={() => console.log("inside photo")}
            deleteFunction={() => handleDelete(message)}
          />
        ))}</ScrollView>
    </SafeAreaView>
  );
};

export default Testing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
    color: "red"
  },
});