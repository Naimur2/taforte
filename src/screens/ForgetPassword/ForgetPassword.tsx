import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import AuthContext from "../../context/AuthContext";
import {
    AuthContextProps,
    ForgetPasswordProps,
} from "../../interfaces/context";
import { ForgetPasswordSchema } from "../../schemas";
import { KeyboardView, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import AuthHeader from "../common/AuthHeader";

export default function ForgetPassword() {
    const navigation = useNavigation();
    const authCtx = React.useContext<AuthContextProps>(AuthContext);

    const initialValues: ForgetPasswordProps = {
        email: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => authCtx.sendCode(data),
        validationSchema: ForgetPasswordSchema,
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
                    <AuthHeader title="Forget Password!" />
                    <VStack pb={30}>
                        <Input
                            mt={"10%"}
                            label="Email address"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChangeText={formik.handleChange("email")}
                            error={formik.errors.email}
                        />

                        <Button
                            onPress={formik.handleSubmit}
                            mt={"30%"}
                            text="Send Code"
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
