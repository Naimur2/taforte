import React from "react";
import Screen from "../../components/Screen";
import { Text } from "../../styled/typography";
import styled from "styled-components/native";
import colors from "../../themes/colors";
import Input from "../../components/Input";
import CScrollView from "../../components/CScrollView";
import Button from "../../components/Button";

export default function Login() {
    const [isPassword, setIsPassword] = React.useState<boolean>(true);
    const [password, setPassword] = React.useState<string>("");

    return (
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
                <CScrollView>
                    <Input
                        mt={"10%"}
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <Input
                        rightIcon={
                            password.length > 0 &&
                            (isPassword ? "eye-close" : "eye")
                        }
                        type={isPassword ? "password" : "text"}
                        onRightIconPress={() => setIsPassword(!isPassword)}
                        label="Password"
                        placeholder="Enter password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button mt={"10%"} text="Login" variant="primary" />
                </CScrollView>
            </VStack>
        </Screen>
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
`;

const VStack = styled.View`
    padding: 0 16px;
    height: 80%;
`;
