import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

const Card = ({ title, price, imageUrl, onPress }) => {
    console.log(imageUrl);
    // const imagePath = require(`../assets/${imageUrl}`);
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{ uri: imageUrl }}
                />
                <Text style={styles.text1}> {title} </Text>
                <Text style={styles.text2}> ₹ {price}  </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        backgroundColor: "white",
        marginBottom: 20,
        overflow: 'hidden',
        marginTop: 10
    },


    image: {
        width: "100%",
        height: 200

    },
    text1: {
        color: colors.black,
        fontWeight: '600',
        fontSize: 20,
        margin: 4,

    },
    text2: {
        color: colors.secondary,
        fontWeight: '600',
        fontSize: 20,
        margin: 4,

    },


})
