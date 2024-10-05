import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
    const LoginPress = () => {

    }
    const navigator = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={5}

        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.heading}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title={"Login"} color={"primary"} onPress={() => navigator.navigate("Login")} />
                <Button title={"Register"} color={"secondary"} onPress={() => navigator.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxHeight: 1300,
        minHeight: 900,
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonContainer: {
        zIndex: 1,
        padding: 20,
        width: "100%",
        position: 'absolute',
        top: 500
    },
    logoContainer: {
        zIndex: 1,
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
});

export default WelcomeScreen;
