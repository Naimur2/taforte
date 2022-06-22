import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login/Login";
import Register from "../screens/RegisterScreen/Register";

export default function AuthRoute() {
    type AuthStackParamList = {
        Login: undefined;
        Register: undefined;
    };

    const Stack = createNativeStackNavigator<AuthStackParamList>();

    const options = {
        headerShown: false,
    };

    return (
        <React.Fragment>
            <Stack.Navigator initialRouteName="Login" screenOptions={options}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </React.Fragment>
    );
}
