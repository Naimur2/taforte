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
import AppTab from "./AppTab";
import TemplateCard from "../screens/home-screens/TemplateScreens/TemplateCard/TemplateCard";
import Scan from "../screens/scan-screen/Scan/Scan";
import ViewMyCard from "../screens/home-screens/ViewMyCard/ViewMyCard";
import ShareQr from "../screens/home-screens/ShareQr/ShareQr";
import EditName from "../screens/profile-screens/EditName/EditName";
import EditEmail from "../screens/profile-screens/EditEmail/EditEmail";
import EditContact from "../screens/profile-screens/EditContact/EditContact";
import EditAddress from "../screens/profile-screens/EditAddress/EditAddress";
import EditPassword from "../screens/profile-screens/EditPassword/EditPassword";
import EditDOB from "../screens/profile-screens/EditDOB/EditDOB";

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
            <Stack.Screen
                options={{
                    headerTitle: "",
                }}
                name="Privacy"
                component={Privacy}
            />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="ACGallery" component={ACGallery} />
            <Stack.Screen name="ACManualy" component={ACManualy} />
            <Stack.Screen name="AddContacts" component={AddContacts} />
            <Stack.Screen name="MyCard" component={MyCard} />
            <Stack.Screen name="Scanned" component={Scaned} />
            <Stack.Screen name="Templates" component={Templates} />
            <Stack.Screen name="TempGroup" component={TemplateGroup} />
            <Stack.Screen name="TempCard" component={TemplateCard} />
            <Stack.Screen name="Scan" component={Scan} />
            <Stack.Screen name="ViewMyCard" component={ViewMyCard} />
            <Stack.Screen name="ShareQr" component={ShareQr} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="EditEmail" component={EditEmail} />
            <Stack.Screen name="EditContact" component={EditContact} />
            <Stack.Screen name="EditAddress" component={EditAddress} />
            <Stack.Screen name="EditPassword" component={EditPassword} />
            <Stack.Screen name="EditDOB" component={EditDOB} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
