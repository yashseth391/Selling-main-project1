import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Icon name="close" size={38} color="white" />

            </View>
            <View style={styles.deleteIcon}>
                <Icon name="delete" size={38} color="white" />
            </View>

            <Image
                resizeMode='contain'
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {


        position: 'absolute',
        left: 30,
        top: 40
    },
    deleteIcon: {


        position: 'absolute',
        top: 40,
        right: 30
    }
})