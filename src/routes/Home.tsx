import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddCard from "../screens/AddCard/AddCard";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import CustomDrawerContent from "../screens/CustomDrawer/CustomDrawerContent";
import Faq from "../screens/Faq/Faq";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Privacy from "../screens/Privacy/Privacy";
import AppTab from "./AppTab";
import Settings from "../screens/Settings/Settings";
import Help from "../screens/Help/Help";
import ACGallery from "../screens/ACGallery/ACGallery";
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
                drawerContent={({ navigation }) => (
                    <CustomDrawerContent navigation={navigation} />
                )}
            >
                <Drawer.Screen
                    name="StackNavigator"
                    component={StackNavigator}
                />
            </Drawer.Navigator>
        </React.Fragment>
    );
}
