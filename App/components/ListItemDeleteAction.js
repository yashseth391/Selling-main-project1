import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name="delete"
                    size={28}
                    color={"green"}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container: {

        top: 10,

        left: 200,
    },
});