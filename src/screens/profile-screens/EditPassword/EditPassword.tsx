import React from "react";

import { useFormik } from "formik";
import styled from "styled-components/native";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";

const EditPassword = () => {
    const schema = Yup.object().shape(
        {
            oldPassword: Yup.string().required("Old Password is required"),
            newPassword: Yup.string().required("New Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
                .required("Confirm Password is required"),
        },
        {
            abortEarly: false,
        }
    );

    const initialValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
        validationSchema: schema,
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
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <VStack pb={30}>
                    <Input
                        mt={"10%"}
                        label="Enter old Password"
                        placeholder="Enter your old Password"
                        value={values.oldPassword}
                        onChangeText={handleChange("oldPassword")}
                        error={touched.oldPassword && errors.oldPassword}
                        onBlur={() => setFieldTouched("oldPassword")}
                    />
                    <Input
                        mt={"10%"}
                        label="Enter new Password"
                        placeholder="Enter your new Password"
                        value={values.newPassword}
                        onChangeText={handleChange("newPassword")}
                        error={touched.newPassword && errors.newPassword}
                        onBlur={() => setFieldTouched("newPassword")}
                    />
                    <Input
                        mt={"10%"}
                        label="Confirm Password"
                        placeholder="Confirm your new Password"
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        error={
                            touched.confirmPassword && errors.confirmPassword
                        }
                        onBlur={() => setFieldTouched("confirmPassword")}
                    />

                    <Button onPress={handleSubmit} mt={"30%"} text="Save" />
                </VStack>
            </KeyboardView>
        </Screen>
    );
};

const VStack = styled.View`
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;

export default EditPassword;
