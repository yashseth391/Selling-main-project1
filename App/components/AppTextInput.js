import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import IconAny from './IconAny'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
const AppTextInput = ({ placeholder, width = "100%", icon, ...otherprops }) => {
    return (
        <View style={[styles.Main, { width }]}>
            <View style={styles.container}>
                {icon && <IconAny
                    iconName={icon}
                    iconColor='black'
                    bgColor='white'

                />}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"black"}
                    {...otherprops}
                    style={[styles.textinput, defaultStyles.text]}


                />
            </View>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: "#E1E1E1",
        backgroundColor: colors.secondary,
        marginBottom: 10,
        borderRadius: 20,
    },
    Main: {

    },

})


//<AppTextInput
//    icon={'email'}
//     placeholder="Username"
//    placeholderTextColor={'grey'}
//  keyboardType="default"
// />