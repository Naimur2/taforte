import { useFonts } from "expo-font";
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/routes/Home";
import Login from "./src/screens/Login/Login";

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
            <Login />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
