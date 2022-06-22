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
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login/Login";
import Register from "./src/screens/RegisterScreen/Register";
import AppTab from "./src/routes/AppTab";
import Home from "./src/routes/Home";

export default function App() {
    const [loaded] = useFonts({
        Montserrat_600SemiBold,
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
        Icon: require("./assets/fonts/icon.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto" hidden />
            <Home />
        </NavigationContainer>
    );
}
