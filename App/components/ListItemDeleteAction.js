import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItemDeleteAction = ({ onPress1 }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress1}>
            <View style={styles.container}>
                <Icon
                    name="delete"
                    size={35}
                    color={"green"}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },
});