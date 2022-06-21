import { Formik } from "formik";
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

interface LoginData {
    email: string;
    password: string;
    remember: boolean;
}

export default function Login() {
    const [isPassword, setIsPassword] = React.useState<boolean>(true);

    const initialValues: LoginData = {
        email: "",
        password: "",
        remember: false,
    };

    return (
        <KeyboardView>
            <Screen leftIcon={false} padding={0}>
                <AuthHeader title="Log in and get the update!" />
                <VStack>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(data) => console.log(data)}
                        validationSchema={LoginSchema}
                    >
                        {({
                            handleChange,
                            handleSubmit,
                            values,
                            setFieldValue,
                            errors,
                        }) => (
                            <CScrollView>
                                <Input
                                    mt={"10%"}
                                    label="Email"
                                    placeholder="Enter your email"
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    error={errors.email}
                                />
                                <Input
                                    rightIcon={
                                        values.password.length > 0 &&
                                        (isPassword ? "eye-close" : "eye")
                                    }
                                    type={isPassword ? "password" : "text"}
                                    onRightIconPress={() =>
                                        setIsPassword(!isPassword)
                                    }
                                    label="Password"
                                    placeholder="Enter password"
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    error={errors.password}
                                />
                                <AuthBottom
                                    onChecked={(val) =>
                                        setFieldValue("remember", val)
                                    }
                                    onSubmit={handleSubmit}
                                    checked={values.remember}
                                    bottomText="Dont have an account?"
                                    bottomColoredText="Login"
                                    onSocialLogin={(s) => console.log(s)}
                                    onColoredPress={() =>
                                        console.log("colored")
                                    }
                                />
                            </CScrollView>
                        )}
                    </Formik>
                </VStack>
            </Screen>
        </KeyboardView>
    );
}

const VStack = styled.View`
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;
