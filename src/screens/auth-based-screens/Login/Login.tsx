import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import AuthContext from "../../../context/AuthContext";
import { AuthContextProps, LoginData } from "../../../interfaces/context";
import { LoginSchema } from "../../../schemas";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";
import AuthBottom from "../../common/AuthBottom/AuthBottom";
import AuthHeader from "../../common/AuthHeader/AuthHeader";

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
        <Screen padding={0}>
            <AuthHeader title="Log in and get the update!" />
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
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
                        onColoredPress={() => navigation.navigate("Register")}
                        onForgetPassword={() =>
                            navigation.navigate("ForgetPassword")
                        }
                    />
                </VStack>
            </KeyboardView>
        </Screen>
    );
}

const VStack = styled.View`
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;
