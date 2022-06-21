import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import CScrollView from "../../components/CScrollView";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";
import colors from "../../themes/colors";
import LoginBottom from "./components/LoginBottom";
import { Formik } from "formik";
import { LoginSchema } from "../../schemas";

interface LginData {
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
                <AuthHeader px={0}>
                    <Text
                        maxWidth={250}
                        fontSize={24}
                        fontWeight={600}
                        fontFamily="Montserrat"
                    >
                        Log in and get the update!
                    </Text>
                </AuthHeader>
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
                                <LoginBottom
                                    onChecked={(val) =>
                                        setFieldValue("remember", val)
                                    }
                                    onSubmit={handleSubmit}
                                    checked={values.remember}
                                />
                            </CScrollView>
                        )}
                    </Formik>
                </VStack>
            </Screen>
        </KeyboardView>
    );
}

const AuthHeader = styled.View`
    padding: 35px 20px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-color: ${colors.light200};
    border-left-color: ${colors.light200};
    border-right-color: ${colors.light200};
    border-bottom-right-radius: 35px;
    border-bottom-left-radius: 35px;
    height: 18%;
    min-height: 130px;
`;

const VStack = styled.View`
    padding: 0 16px;
    height: 80%;
    ${Spacing}
    ${Size}
`;

const KeyboardView = styled(KeyboardAwareScrollView)`
    flex: 1;
    width: 100%;
    ${Spacing}
    ${Size}
`;
