import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from './Button'

import Geolocation from 'react-native-geolocation-service';
const Location = () => {
    const [location, setLocation] = useState(null);   //This was False , I changed it to empty string
    const requestLocationPermission = async () => {
        try {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Geolocation Permission",
                    message: "Can we access your location",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted == PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can access the Location");
                return true;
            }
            else {
                console.log("You cannot access the Location");
                return false;
            }
        }
        catch (err) {
            return false;
        }
    }



    const getLocation = async () => {
        const result = await requestLocationPermission();
        if (result) {

            Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                error => {
                    console.log(error.code, error.message);
                    setLocation(null);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }


    }

    return (
        <View style={styles.container}>
            <View style={styles.getLocation}>
                <Button title={"Get Location"} onPress={getLocation} />
                <Text style={styles.txt}>Latitude :</Text>
                <Text style={styles.txt}>Longitude :</Text>
            </View>
            <View>
                <Button title="Save Location" />
            </View>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
    ,
    getLocation: {
        marginBottom: 200,

    },
    txt: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    }


})