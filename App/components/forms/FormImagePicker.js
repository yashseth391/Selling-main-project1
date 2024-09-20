import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ImageInput from '../ImageInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const [imageError, setImageError] = useState('');
    const imageUris = values[name];

    const handleAdd = (uri) => {
        const newImageUris = [...imageUris, uri];
        setFieldValue(name, newImageUris);
        if (newImageUris.length > 0) {
            setImageError('');
        }
    };

    const handleRemove = (uri) => {
        const newImageUris = imageUris.filter((imageUri) => imageUri !== uri);
        setFieldValue(name, newImageUris);
        if (newImageUris.length === 0) {
            setImageError('Please add at least one image.');
        }
    };

    return (
        <>
            <ImageInput

                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />


        </>
    );
};

export default FormImagePicker;

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
});