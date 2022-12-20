import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";

const Drawer = createDrawerNavigator() 

    function DrawerNavigation() {
        return(
            <Drawer.Navigator>
                <Drawer.Screen name = "HomeScreen" component = {HomeScreen} />
                <Drawer.Screen name = "SettingsScreen" component = {SettingsScreen} />
            </Drawer.Navigator>
 
)   

};
export default DrawerNavigation;