import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import BookDonate from '../screens/Bookdonatescreen';
import BookRequest from '../screens/Bookrequestscreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen:BookDonate,
    navigationOptions:{
        tabBarIcon: <Image
        style = {{width:20, height:20}}
        source = {require('../assets/request-book.png')}></Image>
    }}, 

    RequestBooks: {screen:BookRequest,
        navigationOptions:{
            tabBarIcon: <Image
            style = {{width:20, height:20}}
            source = {require('../assets/request-list.png')}></Image>}
        }
})
    

