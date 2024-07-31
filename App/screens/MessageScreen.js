import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'

const MessageScreen = () => {
    const messages = [
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

    return (
        <View>
            <FlatList
                data={messages}
                key={messages => messages.id.toString}
                renderItem={({ item }) =>
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subtitle={item.description}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}

            />
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({})