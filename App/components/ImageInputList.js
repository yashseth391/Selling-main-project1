import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageInput from './ImageInput'

const ImageInputList = (imageUris = [], onRemoveImage, onAddImage) => {
    return (
        <View style={styles.contatiner}>
            {imageUris.map(uri =>
                <ImageInput
                    imageUri={uri}

                    onChangeImage={() => onRemoveImage(uri)} />)}
            <ImageInput ChangeImage={uri => onAddImage(uri)} />
        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    contatiner: {
        flexDirection: 'row',
    }
})