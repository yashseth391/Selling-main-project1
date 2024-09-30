import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import { FormikContext, useFormikContext } from 'formik'
import colors from '../../config/colors'
const SubmitButton = ({ title, colorI = "secondary" }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <Button title={title} onPress={handleSubmit} color={colorI} />
    )
}

export default SubmitButton

const styles = StyleSheet.create({})