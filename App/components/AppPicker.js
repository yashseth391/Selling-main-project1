import { FlatList, Modal, Picker, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import IconAny from './IconAny'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Button from './Button';
import PickerItem from './PickerItem';


const AppPicker = ({ icon, selectedItem, onSelectedItem, placeholder, items }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.Main}>
                    <View style={styles.container}>
                        {icon && <IconAny
                            iconName={icon}
                            iconColor='black'
                            bgColor='white'
                        />}
                        <AppText style={{ textAlignVertical: "center", marginLeft: 10, marginRight: 150 }}
                            todisplay={selectedItem ? selectedItem.label : placeholder} />
                        <IconAny
                            iconName={"arrow-drop-down"}
                            style={styles.icon}
                            iconColor='black'
                            bgColor='white'
                            iconSize={"45"}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.btn}>Close</Text>
                </TouchableWithoutFeedback>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItem
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectedItem(item);
                        }}
                    />}
                />

            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    btn: {
        color: "blue",
        paddingTop: StatusBar.currentHeight / 8,
        fontSize: 32,
        marginLeft: "40%"

    },

    container: {
        flexDirection: "row",
        padding: 10,


        marginBottom: 30
    },
    icon: {
        position: "absolute",

        left: 400

    },
    Main: {

    },
    txt: {
        flex: 1,
        fontSize: 15,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "black",
        textAlignVertical: "center"
    }
})