import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabProps } from "../interfaces/index";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppTab from "./AppTab";
import CustomDrawerContent from "../screens/CustomDrawer/CustomDrawerContent";
import Faq from "../screens/Faq/Faq";
import Privacy from "../screens/Privacy/Privacy";

export default function AuthRoute(props: TabProps) {
    type AuthStackParamList = {
        Home: undefined;
        Contact: undefined;
    };

    const Stack = createNativeStackNavigator<HomeStackParamList>();

    const options = {
        headerShown: false,
    };

    return (
        <React.Fragment>
            <Stack.Navigator
                initialRouteName="Tab"
                screenOptions={options}
                drawerContent={({ navigation }) => (
                    <CustomDrawerContent navigation={navigation} />
                )}
            ></Stack.Navigator>
        </React.Fragment>
    );
}
