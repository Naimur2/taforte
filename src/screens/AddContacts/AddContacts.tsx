import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { LoginData } from "../../interfaces/context";
import { LoginSchema } from "../../schemas";
import { KeyboardView, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";

export default function AddContacts() {
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
        <Screen padding={0}>
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
