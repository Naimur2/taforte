import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import CScrollView from "../../components/CScrollView";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { LoginSchema } from "../../schemas";
import { KeyboardView, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import AuthBottom from "../common/AuthBottom";
import AuthHeader from "../common/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginData {
    email: string;
    password: string;
}

export default function Login() {
    const [isPassword, setIsPassword] = React.useState<boolean>(true);
    const [remember, setRemember] = React.useState<boolean>(false);

    const initialValues: LoginData = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
        validationSchema: LoginSchema,
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Screen leftIcon={false} padding={0}>
                    <AuthHeader title="Log in and get the update!" />
                    <VStack>
                        <Input
                            mt={"10%"}
                            label="Email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChangeText={formik.handleChange("email")}
                            error={formik.errors.email}
                        />
                        <Input
                            rightIcon={
                                formik.values.password.length > 0 &&
                                (isPassword ? "eye-close" : "eye")
                            }
                            type={isPassword ? "password" : "text"}
                            onRightIconPress={() => setIsPassword(!isPassword)}
                            label="Password"
                            placeholder="Enter password"
                            value={formik.values.password}
                            onChangeText={formik.handleChange("password")}
                            error={formik.errors.password}
                        />
                        <AuthBottom
                            onSubmit={formik.handleSubmit}
                            checked={remember}
                            onChecked={(val) => setRemember(val)}
                            bottomText="Don't have an account?"
                            bottomColoredText="Register"
                            onSocialLogin={(s) => console.log(s)}
                            onColoredPress={() => console.log("colored")}
                        />
                    </VStack>
                </Screen>
            </KeyboardView>
        </SafeAreaView>
    );
}

const VStack = styled.View`
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;
