import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabProps } from "../interfaces/index";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function Home(props: TabProps) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}
