import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import colors from '../config/colors';
const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={5}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={
                        styles.logo
                    }
                />
                <Text style={styles.heading}>Sell What You Don't Need</Text>
            </View>


            <View style={styles.buttonContainer}>
                <Button title={"Login"} color={"primary"} />
                <Button title={"Register"} color={"secondary"} />
            </View>



        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'

    }
    ,
    logo: {
        width: 100,
        height: 100,


    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },

    logoContainer: {
        position: 'absolute',
        top: 90,
        alignItems: 'center'
    },
    heading: {
        fontWeight: '800',
        fontSize: 25,
        paddingVertical: 20,
        color: 'black',
    }
})

export default WelcomeScreen;