import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name="delete"
                    size={45}
                    color={"green"}
                />
            </View>
        </TouchableOpacity>
    );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        top: 10,
        position: 'absolute',
        left: 200,
    },
});