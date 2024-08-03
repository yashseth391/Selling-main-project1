import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

import Icon from '../components/IconAny'

const AccountScreen = () => {
    return (
        <View>
            <Icon
                iconName={"email"}
                iconSize={50}
                iconColor={"white"}

            />
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})