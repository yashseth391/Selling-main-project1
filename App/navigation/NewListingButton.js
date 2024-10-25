import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/AntDesign';
const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.continer} >
        <Icon name="pluscircle" color={colors.white} size={30} />
      </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
  continer: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 30,
    borderColor: colors.white,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})