import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import ListItemDeleteAction from './ListItemDeleteAction'

const ListItem = ({ image, title, subtitle, onPressAction, deleteFunction,
    ImageComponent

}) => {


    return (
        <TouchableHighlight
            onPress={onPressAction}
            underlayColor={"#E1E1E1"}
        >

            <View style={styles.container}>
                {ImageComponent}
                {image && <Image
                    source={image}
                    style={styles.image}
                />}
                <View style={styles.info}  >
                    <AppText todisplay={title} style={styles.titletext} />
                    {subtitle && <AppText todisplay={subtitle} style={styles.subtitletext} />}
                </View>
                {deleteFunction && <ListItemDeleteAction onPress={deleteFunction} />}
            </View>
        </TouchableHighlight>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 4,
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
        justifyContent: "center"
    }
})
