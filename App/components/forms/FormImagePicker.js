import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInput from '../ImageInput'

const FormImagePicker = () => {
    const [imageUris, setImageUris] = useState([]);

    const handleAddImage = (newImageUri) => {
        setImageUris([...imageUris, newImageUri]);
    };

    return (
        <>
            <ImageInput onChangeImage={handleAddImage} />
        </>
    )
}

export default FormImagePicker

const styles = StyleSheet.create({})