import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const ErrorMessage = ({ error }) => {
    if (!error) return null;

    return (
        <AppText todisplay={error} style={styles.errortxt} />
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    errortxt: {
        color: "red"
    }
})