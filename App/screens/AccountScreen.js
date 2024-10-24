import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

import Icon from '../components/IconAny'
import IconAny from '../components/IconAny'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'
import { useNavigation } from '@react-navigation/native'

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        tragetScreen: "Messages"
    }
]
const AccountScreen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.screen}>
            <View style={styles.container1}>
                <ListItem
                    title={'Yash Seth'}
                    subtitle={'yashseth391@gmail.com'}
                    onPressAction={() => console.log('on press')}
                    deleteFunction={''}
                    image={require("../assets/yash.jpg")}
                    ImageComponent={''}
                />
            </View>
            <View style={styles.container2}>
                <FlatList
                    data={menuItems}
                    key={item => item.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}

                            ImageComponent={<Icon
                                iconName={item.icon.name}
                                bgColor={item.icon.backgroundColor}
                            />}
                            onPressAction={() => navigator.navigate(item.tragetScreen)}
                        />

                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />

            </View>
            <View style={styles.container3}>
                <ListItem
                    title={"Log Out"}
                    ImageComponent={<Icon
                        iconName={"logout"}
                        bgColor={"green"}
                    />}
                />
            </View>
        </View>

    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container1: {
        margin: 15,
    },
    container2: {
        margin: 18
    },
    container3: {
        margin: 15
    },
    screen: {

        flex: 1,
    }
})