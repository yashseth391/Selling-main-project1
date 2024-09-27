import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from './Button';
import useLocation from '../hooks/useLocation';

const Location = () => {
    const location = useLocation();

    const getLocation = () => {
        console.log(location);
    };

    return (
        <View style={styles.container}>
            <View style={styles.getLocation}>
                <Button title={"Get Location"} onPress={getLocation} />
                <Text style={styles.txt}>Latitude: {location?.latitude ?? 'N/A'}</Text>
                <Text style={styles.txt}>Longitude: {location?.longitude ?? 'N/A'}</Text>
            </View>
        </View>
    );
};

export default Location;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    getLocation: {
        marginBottom: 200,
    },
    txt: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
});