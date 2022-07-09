import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from "@expo-google-fonts/inter";
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthContext from "./context/AuthContext";
import { AuthContextProps } from "./interfaces/context";
import AuthRoute from "./routes/AuthRoute";
import Home from "./routes/Home";

export default function Main() {
    const authCtx = React.useContext<AuthContextProps>(AuthContext);

    const [loaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_300Light,
        Montserrat_400Regular,
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
        Icon: require("../assets/fonts/icon.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            {authCtx?.isLoggedIN ? <Home /> : <AuthRoute />}
        </NavigationContainer>
    );
}
