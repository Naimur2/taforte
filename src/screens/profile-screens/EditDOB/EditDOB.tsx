import React from "react";

import { useFormik } from "formik";
import styled from "styled-components/native";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { KeyboardView, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";

const EditDOB = () => {
    const initialValues = {
        date: "",
        month: "",
        year: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
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
                    <DateInputs>
                        <Input
                            mt={"10%"}
                            label="Date"
                            placeholder="Date"
                            value={values.date}
                            onChangeText={handleChange("date")}
                            error={touched.date && errors.date}
                            onBlur={() => setFieldTouched("date")}
                            width={"28%"}
                        />
                        <Input
                            mt={"10%"}
                            label="Month"
                            placeholder="Month"
                            value={values.month}
                            onChangeText={handleChange("month")}
                            error={touched.month && errors.month}
                            onBlur={() => setFieldTouched("month")}
                            width={"28%"}
                        />
                        <Input
                            mt={"10%"}
                            label="Year"
                            placeholder="Year"
                            value={values.year}
                            onChangeText={handleChange("year")}
                            error={touched.year && errors.year}
                            onBlur={() => setFieldTouched("year")}
                            width={"38%"}
                        />
                    </DateInputs>

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

const DateInputs = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export default EditDOB;
