import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { RegisterSchema } from "../../../schemas";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";
import AuthBottom from "../../common/AuthBottom/AuthBottom";
import AuthHeader from "../../common/AuthHeader/AuthHeader";

interface RegisterData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export default function Register() {
    const navigation = useNavigation();

    const [isPassword, setIsPassword] = React.useState<boolean>(true);
    const [isConfirmPassword, setIsConfirmPassword] =
        React.useState<boolean>(true);

    const initialValues: RegisterData = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
        validationSchema: RegisterSchema,
    });

    const {
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        setFieldTouched,
    } = formik;

    return (
        <Screen padding={0}>
            <AuthHeader title="Sign up and create your card!" />
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <VStack pb={30}>
                    <Input
                        mt={"10%"}
                        label="Enter full name"
                        placeholder="Enter your full name"
                        value={values.fullName}
                        onChangeText={handleChange("fullName")}
                        error={touched.fullName && errors.fullName}
                        onBlur={() => setFieldTouched("fullName")}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        error={touched.email && errors.email}
                        onBlur={() => setFieldTouched("email")}
                    />
                    <Input
                        rightIcon={
                            values.password.length > 0 &&
                            (isPassword ? "eye-close" : "eye")
                        }
                        type={isPassword ? "password" : "text"}
                        onRightIconPress={() => setIsPassword(!isPassword)}
                        label="Password"
                        placeholder="Enter password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                        error={touched.password && errors.password}
                        onBlur={() => setFieldTouched("password")}
                    />
                    <Input
                        rightIcon={
                            values.confirmPassword.length > 0 &&
                            (isConfirmPassword ? "eye-close" : "eye")
                        }
                        type={isConfirmPassword ? "password" : "text"}
                        onRightIconPress={() =>
                            setIsConfirmPassword(!isConfirmPassword)
                        }
                        label="Confirm Password"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        error={
                            touched.confirmPassword && errors.confirmPassword
                        }
                        onBlur={() => setFieldTouched("confirmPassword")}
                    />
                    <AuthBottom
                        onSubmit={handleSubmit}
                        hideForgotPassword={true}
                        bottomText="Already have an account?"
                        bottomColoredText="Login"
                        onSocialLogin={(s) => console.log(s)}
                        onColoredPress={() => navigation.navigate("Login")}
                        submitText="Register"
                    />
                </VStack>
            </KeyboardView>
        </Screen>
    );
}

const VStack = styled.View`
    flex: 1;
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;
