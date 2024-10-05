import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'

const Current = () => {
    const products = [
        {
            id: 1,
            name: 'Iphone 12',
            color: 'black',
            price: 3000,
            image: 'https://imgs.search.brave.com/F8XTpdaRxBQzGcwAP8rE_Ej9JxYQa50IiAZrlaBRUIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDc4ODU3MC9waG90/by9yZWFsaXN0aWMt/bW9iaWxlLXBob25l/LW1vY2t1cC10ZW1w/bGF0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dWpJcEFS/MVBwdFJJaDZXSzBV/VzlRc1F0WDcxckFT/ZWZCN1Z0V3FISDFE/OD0'
        },
        {
            id: 2,
            name: 'Iphone 11',
            color: 'black',
            price: 4000,
            image: 'https://imgs.search.brave.com/F8XTpdaRxBQzGcwAP8rE_Ej9JxYQa50IiAZrlaBRUIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDc4ODU3MC9waG90/by9yZWFsaXN0aWMt/bW9iaWxlLXBob25l/LW1vY2t1cC10ZW1w/bGF0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dWpJcEFS/MVBwdFJJaDZXSzBV/VzlRc1F0WDcxckFT/ZWZCN1Z0V3FISDFE/OD0'
        },
        {
            id: 3,
            name: 'Iphone 10',
            color: 'black',
            price: 5000,
            image: 'https://imgs.search.brave.com/F8XTpdaRxBQzGcwAP8rE_Ej9JxYQa50IiAZrlaBRUIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDc4ODU3MC9waG90/by9yZWFsaXN0aWMt/bW9iaWxlLXBob25l/LW1vY2t1cC10ZW1w/bGF0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dWpJcEFS/MVBwdFJJaDZXSzBV/VzlRc1F0WDcxckFT/ZWZCN1Z0V3FISDFE/OD0'
        },
    ]

    return (
        <ScrollView scrollEnabled>
            <View style={styles.container}>
                <Header />

                {
                    products.map((item) => <Product item={item} key={item.id} />

                    )
                }


            </View>
        </ScrollView>
    )
}

export default Current

const styles = StyleSheet.create({
    container: {

    }
})