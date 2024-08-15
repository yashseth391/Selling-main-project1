import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'

import Screen from './Screen'
const ListingEditingScreen = () => {
    const validationSchema = Yup.object().shape(
        {
            title: Yup.string().required().min(1).label("Tittle"),
            price: Yup.number().required().min(1).max(10000).label("Price"),
            description: Yup.string().label("Description"),
            category: Yup.object().required().nullable().label("Category")
        }
    )
    const categories = [
        { label: "Furniture", value: 1 },
        { label: "Clothing", value: 2 },
        { label: "Camera", value: 3 },
    ]

    return (
        <View style={styles.container}>

        </View>
    )
}

export default ListingEditingScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }

})