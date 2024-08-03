import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'



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
const MessageScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the Mesaage from Future

        setMessages(messages.filter(m => m.id !== message.id));
        //Delting from server in future
    }

    return (
        <View >
            <FlatList
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subtitle={item.description}
                        onPressAction={() => console.log("inside photo")}
                        deleteFunction={() => handleDelete(item)}
                    />

                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages(
                    [
                        {
                            id: 3,
                            title: 't3',
                            description: 'd3',
                            image: require("../assets/owner1.webp")
                        }
                    ]

                )}
            />

        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
    }
})