import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'
const AppFormField = ({ name, visible, ...otherProps }) => {
    const { setFieldTouched, errors, touched, handleChange } = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                //   placeholder={"Email"}
                //   keyboardType={"email-address"}

                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})