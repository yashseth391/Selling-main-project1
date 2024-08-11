import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <View>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: "white"
    }
})