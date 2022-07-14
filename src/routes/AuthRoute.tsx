import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgetPassword from "../screens/auth-based-screens/ForgetPassword/ForgetPassword";
import Login from "../screens/auth-based-screens/Login/Login";
import Onboarding from "../screens/auth-based-screens/Onboarding/Onboarding";
import Register from "../screens/auth-based-screens/RegisterScreen/Register";

export default function AuthRoute() {
    type AuthStackParamList = {
        Login: undefined;
        Register: undefined;
    };

    const Stack = createNativeStackNavigator<AuthStackParamList>();

    return (
        <React.Fragment>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerTransparent: true,
                    headerTintColor: "white",
                    headerTitleAlign: "center",
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Onboarding"
                    component={Onboarding}
                />
            </Stack.Navigator>
        </React.Fragment>
    );
}
