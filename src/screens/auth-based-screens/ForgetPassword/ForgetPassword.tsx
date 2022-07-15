import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import AuthContext from "../../../context/AuthContext";
import {
    AuthContextProps,
    ForgetPasswordProps,
} from "../../../interfaces/context";
import { ForgetPasswordSchema } from "../../../schemas";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";
import AuthHeader from "../../common/AuthHeader/AuthHeader";

export default function ForgetPassword() {
    const authCtx = React.useContext<AuthContextProps>(AuthContext);

    const initialValues: ForgetPasswordProps = {
        email: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => authCtx.sendCode(data),
        validationSchema: ForgetPasswordSchema,
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
            <AuthHeader title="Forget Password!" />
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <VStack pb={30}>
                    <Input
                        mt={"10%"}
                        label="Email address"
                        placeholder="Enter your email"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        error={touched.email && errors.email}
                        onBlur={() => setFieldTouched("email")}
                    />

                    <Button
                        onPress={handleSubmit}
                        mt={"30%"}
                        text="Send Code"
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
