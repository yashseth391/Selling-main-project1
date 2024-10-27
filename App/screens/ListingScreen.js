import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'
import Card from '../components/Card'
import colors from '../config/colors'
import ListingApi from '../Backend/api/listings'
import { useNavigation } from '@react-navigation/native'


const ListingScreen = () => {
    const navigator = useNavigation();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();

    }, []);

    const loadListings = async () => {
        const response = await ListingApi.getListings();
        console.log(response.data);
        console.log("hello");
        setListings(response.data);

    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        price={item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigator.navigate('ListingDetail', item)}

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