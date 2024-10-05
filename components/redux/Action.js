import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ADD_TO_CART } from './Constant'
export function addtocart(item) {
    return {
        type: ADD_TO_CART,
        data: item //joh bhi iska color kya hai ,price kya hai, name kya hai,quantity kya hai
    }
}