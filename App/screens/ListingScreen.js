import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import Card from '../components/Card'
import colors from '../config/colors'
const listings = [
    {
        id: 1,
        title: "Red Jacket For Sale",
        price: 100,
        image: require("../assets/red_jacket2.jpeg")
    },
    {
        id: 2,
        title: "Couch For Sale",
        price: 300,
        image: require("../assets/couch.jpg")
    }

]
const ListingScreen = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                }
            />

        </View>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,

    }
})