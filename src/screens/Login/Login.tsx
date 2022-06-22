import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { LoginSchema } from "../../schemas";
import { KeyboardView, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import AuthBottom from "../common/AuthBottom";
import AuthHeader from "../common/AuthHeader";
import { LoginData, AuthContextProps } from "../../interfaces/context";
import AuthContext from "../../context/AuthContext";

export default function Login() {
    const navigation = useNavigation();
    const authCtx = React.useContext<AuthContextProps>(AuthContext);

    const [isPassword, setIsPassword] = React.useState<boolean>(true);
    const [remember, setRemember] = React.useState<boolean>(false);

    const initialValues: LoginData = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => authCtx.login({ ...data, accountType: "auth" }),
        validationSchema: LoginSchema,
    });

    return (
        <SafeAreaView
            edges={["bottom"]}
            style={{ flex: 1, backgroundColor: "#fff" }}
        >
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Screen leftIcon={true} padding={0}>
                    <AuthHeader title="Log in and get the update!" />
                    <VStack pb={30}>
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
                            onColoredPress={() =>
                                navigation.navigate("Register")
                            }
                            onForgetPassword={() =>
                                navigation.navigate("ForgetPassword")
                            }
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
