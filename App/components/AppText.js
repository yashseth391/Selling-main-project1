import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../config/colors';
function AppText({ todisplay, style }) {
    return (
        <Text style={[styles.text, style]}>{todisplay}</Text>
    );
}
const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
export default AppText;