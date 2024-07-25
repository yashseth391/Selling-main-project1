import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({ image, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Image source={image}
                style={styles.image}
            />
            <View style={styles.detail}>
                <AppText todisplay={title} style={styles.tittle} />
                <AppText todisplay={subtitle} style={styles.subtittle} />
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginRight: 10,

    },
    subtittle: {
        color: colors.medium,
    },

    tittle: {
        fontWeight: "500"
    }
})