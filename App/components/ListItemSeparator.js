import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItemSeparator = () => {
    return (
        <View style={styles.separate} />


    )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    separate: {
        width: "100%",
        height: 2,
        backgroundColor: "#f8f4f4"
    }
})