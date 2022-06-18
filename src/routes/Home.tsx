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

export default function Home(props: TabProps) {
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
                <Drawer.Screen name="Tab" component={AppTab} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
                <Stack.Screen name="Faq" component={Faq} />
                <Stack.Screen name="Privacy" component={Privacy} />
            </Drawer.Navigator>
        </React.Fragment>
    );
}
