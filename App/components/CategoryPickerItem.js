import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import App from '../../App1'
import AppText from './AppText'
import IconAny from './IconAny'

import { TouchableWithoutFeedback } from 'react-native'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <IconAny iconName={item.icon} bgColor={item.backgroundColor} iconSize={80} />
                <Text style={styles.txt} >{item.label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
    },
    txt: {
        color: "black",

        fontSize: 20,
    }
})