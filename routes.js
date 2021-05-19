import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Tech from './screens/Tech';
import Cripto from './screens/Cripto';
import Gadgets from './screens/Gadgets';
import Startups from './screens/Startups';
import Space from './screens/Space';


import { Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: true,
            style:{
                borderTopColor: 'transparent',
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 70,
                ...style.shadow

            },
            activeTintColor: '#152C2C',
            tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            }
        }}>
            <Tab.Screen 
            name="Geral" 
            component={Tech} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <Entypo name="code" size={size} color={color} />  
                    </View>
                )
            }}
            />

            <Tab.Screen 
            name="Tech" 
            component={Cripto} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <FontAwesome name="bitcoin" size={size} color={color} /> 
                )
            }}
            />

            <Tab.Screen 
            name="Business" 
            component={Startups}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons name="attach-money" size={size} color={color} />  
                )
            }} 
            />

            <Tab.Screen 
            name="Ciência" 
            component={Space}
            options={{
                tabBarIcon: ({ size, color }) => (
                <FontAwesome name="space-shuttle" size={size} color={color} />                
                )
            }} 
            />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',   
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})