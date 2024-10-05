import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={
                { fontSize: 24 }
            }>0</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'blue',
        width: '100%',
    }
})