import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import IconAny from './IconAny';

const ImageLibrary = () => {
    const [imageUri, setImageUri] = useState('');
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();

        if (!granted) {
            Alert.alert('You need to enable permission to access the library');
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (result.canceled) {
                console.log('User cancelled image picker');
            } else {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={selectImage} style={styles.image}>
                <IconAny
                    iconName="camera-alt"
                    iconSize={100}
                    iconColor="black"
                    bgColor="white"
                />
            </TouchableOpacity>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    );
};

export default ImageLibrary;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        height: 40,
        width: 130,
        margin: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    icon: {
        height: 130,
        width: 10,
    },
    image: {
        margin: 5,
        height: 130,
        width: 140,
    },
    txt: {
        fontSize: 20,
        color: 'white',
    },
});
