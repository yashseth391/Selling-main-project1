import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import IconAny from './IconAny';

const ImageInput = ({ onRemoveImage, onAddImage }) => {
    const [imageUris, setImageUris] = useState([]);
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
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            if (result.canceled) {
                console.log('User cancelled image picker');
            } else {
                const newImageUri = result.assets[0].uri;
                setImageUris([...imageUris, newImageUri]);
                onAddImage([...imageUris, newImageUri]);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    const deselectImage = (uri) => {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            {
                text: 'Yes',
                onPress: () => {
                    const newImageUris = imageUris.filter((imageUri) => imageUri !== uri);
                    setImageUris(newImageUris);
                    onRemoveImage(newImageUris);
                },
            },
            {
                text: 'No',
            },
        ]);
    };

    const scrollView = useRef();

    return (
        <View>
            <ScrollView
                style={styles.container}
                horizontal={true}
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}
            >
                {imageUris.map((uri, index) => (
                    <TouchableOpacity key={index} onPress={() => deselectImage(uri)}>
                        <Image source={{ uri: uri }} style={styles.image} />
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={selectImage} style={styles.image}>
                    <IconAny
                        iconName="camera-alt"
                        iconSize={90}
                        iconColor="black"
                        bgColor="white"
                    />
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
};

export default ImageInput;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        height: 40,
        width: 130,
        margin: 10,
    },
    container: {
        flexDirection: 'row',
    },
    icon: {
        height: 130,
        width: 10,
    },
    image: {
        margin: 5,
        height: 130,
        width: 109,
    },
    txt: {
        fontSize: 20,
        color: 'white',
    },
});