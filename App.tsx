import React from "react";
import AuthContextProvider from "./src/context/AuthContextProvider";
import Main from "./src/Main";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <AuthContextProvider>
                <StatusBar style="auto" hidden />
                <Main />
            </AuthContextProvider>
        </NavigationContainer>
    );
}
