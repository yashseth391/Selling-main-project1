import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Product = ({ item, id }) => {
    return (
        < View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
            <Button title='Add to cart' />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "red",
        borderBottomWidth: 1
    }
})