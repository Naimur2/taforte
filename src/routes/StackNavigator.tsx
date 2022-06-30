import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ACGallery from "../screens/ACGallery/ACGallery";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import Faq from "../screens/Faq/Faq";
import Help from "../screens/Help/Help";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

import Privacy from "../screens/Privacy/Privacy";
import Settings from "../screens/Settings/Settings";
import AppTab from "./AppTab";
import AddCard from "../screens/AddCard/AddCard";
import HeaderBack from "../components/HeaderBack";
import ACManualy from "../screens/ACManualy/ACManualy";
import AddContacts from "../screens/AddContacts/AddContacts";

const StackNavigator: React.FC = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "700",
                },
                headerLeft: () => <HeaderBack />,
            }}
            initialRouteName="AppTab"
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name="AppTab"
                component={AppTab}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="ACGallery" component={ACGallery} />
            <Stack.Screen name="ACManualy" component={ACManualy} />
            <Stack.Screen name="AddContacts" component={AddContacts} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
