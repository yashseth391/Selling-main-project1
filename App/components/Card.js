import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

const Card = ({ title, price, image }) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.text1}> {title} </Text>
            <Text style={styles.text2}>  {price} </Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        overflow: 'hidden'
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
