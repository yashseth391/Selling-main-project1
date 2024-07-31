import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Screen = ({ Children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {Children}
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
})