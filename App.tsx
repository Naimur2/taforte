import React from "react";
import AuthContextProvider from "./src/context/AuthContextProvider";
import Main from "./src/Main";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <AuthContextProvider>
            <StatusBar style="auto" hidden />
            <Main />
        </AuthContextProvider>
    );
}
