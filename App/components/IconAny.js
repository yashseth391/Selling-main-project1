import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
const IconAny = ({ iconName, iconSize = 40, iconColor = "white", bgColor = "black" }) => {
    return (
        <View style={{
            height: iconSize, width: iconSize,
            borderRadius: iconSize * 0.5,
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Icon
                name={iconName} size={iconSize * 0.5} color={iconColor}

            />
        </View>
    )
}

export default IconAny

const styles = StyleSheet.create({

})