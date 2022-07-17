import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HeaderBack from "../components/HeaderBack";

import AddContacts from "../screens/contact-screens/AddContacts/AddContacts";
import ContactScreen from "../screens/contact-screens/Contacts/ContactScreen";
import HomeScreen from "../screens/home-screens/HomeScreen/HomeScreen";
import MyCard from "../screens/home-screens/MyCard/MyCard";
import Scaned from "../screens/home-screens/Scanned/Scaned";
import TemplateGroup from "../screens/home-screens/TemplateScreens/TemplateGroup/TemplateGroup";
import Templates from "../screens/home-screens/TemplateScreens/TemplatesA/Templates";
import Faq from "../screens/side-nav-screens/Faq/Faq";
import Help from "../screens/side-nav-screens/Help/Help";
import Privacy from "../screens/side-nav-screens/Privacy/Privacy";

import ACGallery from "../screens/home-screens/AddCardScreens/ACGallery/ACGallery";
import ACManualy from "../screens/home-screens/AddCardScreens/ACManualy/ACManualy";
import AddCard from "../screens/home-screens/AddCardScreens/AddCard/AddCard";
import ShareQr from "../screens/home-screens/ShareQr/ShareQr";
import TemplateCard from "../screens/home-screens/TemplateScreens/TemplateCard/TemplateCard";
import ViewMyCard from "../screens/home-screens/ViewMyCard/ViewMyCard";
import EditAddress from "../screens/profile-screens/EditAddress/EditAddress";
import EditContact from "../screens/profile-screens/EditContact/EditContact";
import EditDOB from "../screens/profile-screens/EditDOB/EditDOB";
import EditEmail from "../screens/profile-screens/EditEmail/EditEmail";
import EditName from "../screens/profile-screens/EditName/EditName";
import EditPassword from "../screens/profile-screens/EditPassword/EditPassword";
import Scan from "../screens/scan-screen/Scan/Scan";
import AppTab from "./AppTab";
import RecomendToFriends from "../screens/side-nav-screens/RecomendToFriends/RecomendToFriends";

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
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    title: "Contacts",
                }}
            />
            <Stack.Screen
                name="Faq"
                component={Faq}
                options={{
                    title: "Faq",
                }}
            />
            <Stack.Screen
                options={{
                    headerTitle: "",
                }}
                name="Privacy"
                component={Privacy}
            />
            <Stack.Screen
                name="AddCard"
                component={AddCard}
                options={{
                    title: "Add Card",
                }}
            />
            <Stack.Screen
                name="Help"
                component={Help}
                options={{
                    title: "Help",
                }}
            />
            <Stack.Screen
                name="ACGallery"
                component={ACGallery}
                options={{
                    title: "Add Card",
                }}
            />
            <Stack.Screen
                name="ACManualy"
                component={ACManualy}
                options={{
                    title: "Add Card",
                }}
            />
            <Stack.Screen
                name="AddContacts"
                component={AddContacts}
                options={{
                    title: "Add Contacts",
                }}
            />
            <Stack.Screen
                name="MyCard"
                component={MyCard}
                options={{
                    title: "My Card",
                }}
            />
            <Stack.Screen
                name="Scanned"
                component={Scaned}
                options={{
                    title: "Scanned",
                }}
            />
            <Stack.Screen
                name="Templates"
                component={Templates}
                options={{
                    title: "Templates",
                }}
            />
            <Stack.Screen name="TempGroup" component={TemplateGroup} />
            <Stack.Screen name="TempCard" component={TemplateCard} />
            <Stack.Screen
                name="Scan"
                component={Scan}
                options={{
                    title: "Scan",
                }}
            />
            <Stack.Screen
                name="ViewMyCard"
                component={ViewMyCard}
                options={{
                    title: "View My Card",
                }}
            />
            <Stack.Screen
                name="ShareQr"
                component={ShareQr}
                options={{
                    title: "Share QR",
                }}
            />

            <Stack.Screen
                name="EditName"
                component={EditName}
                options={{
                    title: "Edit Name",
                }}
            />
            <Stack.Screen
                name="EditEmail"
                component={EditEmail}
                options={{
                    title: "Edit Email",
                }}
            />
            <Stack.Screen
                name="EditContact"
                component={EditContact}
                options={{
                    title: "Edit Contact",
                }}
            />
            <Stack.Screen
                name="EditAddress"
                component={EditAddress}
                options={{
                    title: "Edit Address",
                }}
            />
            <Stack.Screen
                name="EditPassword"
                component={EditPassword}
                options={{
                    title: "Edit Password",
                }}
            />
            <Stack.Screen
                name="EditDOB"
                component={EditDOB}
                options={{
                    title: "Edit DOB",
                }}
            />
            <Stack.Screen
                name="RecomendToFriends"
                component={RecomendToFriends}
                options={{
                    title: "Recomend To Friends",
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
