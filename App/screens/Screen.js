import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen = () => {
    return (
        <SafeAreaView style={styles.screen}>

        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
})