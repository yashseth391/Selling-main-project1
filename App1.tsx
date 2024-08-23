import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import AppTextInput from './App/components/AppTextInput';

import ListingEditingScreen from './App/screens/ListingEditingScreen';
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

type Category = {
  label: string;
  value: number;
};
const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App need Permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs storage permission to access photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleCameraOpen = async () => {
    const hasCameraPermission = await requestCameraPermission();
    if (!hasCameraPermission) {
      Alert.alert('Camera permission denied');
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  const handleGalleryOpen = async () => {
    const hasStoragePermission = await requestStoragePermission();
    if (!hasStoragePermission) {
      Alert.alert('Storage permission denied');
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View style={styles.main}>
      <Image
        source={
          selectedImage == null
            ? require('./App/assets/owner1.webp')
            : {uri: selectedImage}
        }
        style={styles.image}
      />
      <TouchableOpacity onPress={handleCameraOpen} style={styles.button}>
        <Text style={styles.txt}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGalleryOpen} style={styles.button}>
        <Text style={styles.txt}>Open Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
        <Text style={styles.txt}>Permissions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    height: 40,
    width: 130,
    margin: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontSize: 20,
    color: 'white',
  },
});
