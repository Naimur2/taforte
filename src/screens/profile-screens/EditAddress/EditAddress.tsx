import React from "react";

import { useFormik } from "formik";
import styled from "styled-components/native";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";

const EditAddress = () => {
    const schema = Yup.object().shape(
        {
            address: Yup.string().required("Address is required"),
        },
        {
            abortEarly: false,
        }
    );

    const initialValues = {
        address: "",
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
                        label="Enter address"
                        placeholder="Enter your address"
                        value={values.address}
                        onChangeText={handleChange("address")}
                        error={touched.address && errors.address}
                        onBlur={() => setFieldTouched("address")}
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

export default EditAddress;
