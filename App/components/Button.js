import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors';
const Button = ({ title, color = "secondary", onPress }) => {
    return (

        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title} </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
        , marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 20,
        textTransform: 'uppercase',


    }

})
export default Button;