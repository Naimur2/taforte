import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CustomDrawerContent from "../screens/side-nav-screens/CustomDrawer/CustomDrawerContent";
import StackNavigator from "./StackNavigator";

export default function Home() {
    type HomeStackParamList = {
        Home: undefined;
        Contact: undefined;
    };
    type HomeDrawerParamList = {
        Tab: undefined;
    };

    const Drawer = createDrawerNavigator<HomeDrawerParamList>();
    const Stack = createNativeStackNavigator<HomeStackParamList>();

    const options = {
        headerShown: false,
    };

    return (
        <React.Fragment>
            <Drawer.Navigator
                initialRouteName="Tab"
                screenOptions={options}
                drawerContent={CustomDrawerContent}
            >
                <Drawer.Screen
                    name="StackNavigator"
                    component={StackNavigator}
                />
            </Drawer.Navigator>
        </React.Fragment>
    );
}
