import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
export default useLocation = () => {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        getLocation();
        requestLocationPermission();
    }, [])
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
        try {
            if (result) {

                Geolocation.getCurrentPosition(
                    (position) => {
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
        } catch (error) {
            console.log(error);
        }


    }
    return location;
};