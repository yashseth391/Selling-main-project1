import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
const ListingDetails = ({ route }) => {
    const listing = route.params;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={listing.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.subTitle}>₹{listing.price}</Text>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/yash.jpg")}
                    title="yash seth"
                    subtitle="5 listings"
                />
            </View>
        </View>
    );
};
export default ListingDetails;
const styles = StyleSheet.create({
    container: {},
    detailsContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "600"
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 6,
        color: "black"
    },
    userContainer: {
        marginTop: 30,
    },
});