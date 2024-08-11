import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../config/colors';
import defaultStyles from '../config/styles';
function AppText({ todisplay, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>{todisplay}</Text>
    );
}
const styles = StyleSheet.create({

})
export default AppText;