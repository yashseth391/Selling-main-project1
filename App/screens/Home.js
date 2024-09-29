import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


//navigation 
import { NativeStaackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App1'
import Button from '../components/Button'
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title={'Go to details '}
                onPress={() => navigation.navigate("ListingEditing", {
                    productId: "86"
                })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

    },
    smallText: {

    }

})