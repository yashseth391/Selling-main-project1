import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'
const AppFormPicker = ({ width = "100%", items, name, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <View >
                <AppPicker
                    items={items}
                    onSelectedItem={(item) => setFieldValue(name, item)}
                    placeholder={placeholder}
                    selectedItem={values[name]}
                    width={width}

                />
                <ErrorMessage error={errors[name]} visible={touched[name]} />
            </View>
        </>
    )

}
export default AppFormPicker

const styles = StyleSheet.create({

})