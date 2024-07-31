import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import ListItemSeparator from './ListItemSeparator'

const ListItem = ({ image, title, subtitle }) => {
    return (
        <View style={styles.container}>

            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.info}  >
                <AppText todisplay={title} style={styles.titletext} />
                <AppText todisplay={subtitle} style={styles.subtitletext} />
            </View>




        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35

    },
    titletext: {
        fontWeight: '500'
    },
    subtitletext: {
        color: colors.medium
    },
    info: {
        marginLeft: 8,
    }
})