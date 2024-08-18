import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const PickerItem = ({ item, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText todisplay={label} style={styles.text} />
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})