import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {DetailsItemActivity} from '../../data/screenNames';
import styles from './styles';


function getOpenTime(item) {
    if (item.opening_hours) {
        let tr = '';
        if (item.opening_hours.open_now == false) {
            tr = 'CLOSED';
        }
        else tr = 'OPENING';
        return tr;
    } else {
        return 'OPENING';
    }
}
const itemHomestay = (item, {navigation}) => {
    return (
        <TouchableOpacity
            style={styles.itemBtn}
            activeOpacity={0.7}
            onPress = {()=> {
                navigation.navigate(DetailsItemActivity, {item:item})
            }}
        >
            <View style={styles.viewItem}>
                <Text style={styles.nameItem}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.viewItem}>
                <Image
                    source={require('../../assets/Icons/clock.png')}
                />
                <Text style={styles.status}>
                    {getOpenTime(item)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const ListHomestay = ({ route, navigation }) => {
    const { hotels } = route.params;
    console.log(hotels);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={hotels}
                renderItem={({ item, index }) => {
                    return itemHomestay(item, {navigation})
                }}

            />
        </View>
    )
}
export default ListHomestay;
