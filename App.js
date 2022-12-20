import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text} from "react-native";
import { BottomNavigation } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DrawerNavigation from "./screens/Navigation/DrawerNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Spacer, Center, NativeBaseProvider} from "native-base";


const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Login') {
              iconName = focused ? 'lock-closed': 'lock-closed-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
          

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Login" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
    </NavigationContainer>
  );
  };

  export default App;