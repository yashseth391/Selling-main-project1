import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
const ListingScreen = () => {
    return (
        <View>
            <Image
                source={require("../assets/jacket.jpg")}
                style={styles.image}
            />
            <View style={styles.detail}>
                <AppText todisplay={'Red Jacket For Sale'} style={styles.title} />
                <AppText todisplay={'$100'} style={styles.price} />
            </View>
        </View>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    detail: {
        padding: 20,
    },

    image: {
        height: 300,
        width: "100%",

    },
    price: {
        color: colors.secondary,
        paddingTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500",

    },


})