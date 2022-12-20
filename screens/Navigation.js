import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const Navigation = () =>{
    const Tab = createBottomTabNavigator();
return(
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home-outline';
          }     
         else if (route.name === 'Settings') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}>

<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} /> 
    </Tab.Navigator>

)

};




