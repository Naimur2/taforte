import React from "react";

import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import Button from "../../../components/Button";
import Or from "../../../components/Or";
import Screen from "../../../components/Screen";
import AuthContext from "../../../context/AuthContext";
import { AuthContextProps } from "../../../interfaces/context";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
const logo = require("../../../../assets/images/logo.png");

const Onboarding: React.FC = () => {
    const authCtx = React.useContext<AuthContextProps>(AuthContext);
    const navigation = useNavigation();

    const handleGuest = () => {
        authCtx.login({
            accountType: "guest",
        });
    };

    return (
        <Screen>
            <Vstack>
                <Logo source={logo} />
                <Button
                    onPress={() => navigation.navigate("Login")}
                    text="Log in"
                />
                <Button
                    onPress={() => navigation.navigate("Register")}
                    mt={28}
                    variant="light"
                    text="Sign Up"
                />
                <Or my={30} />

                <Text
                    mx={"auto"}
                    fontSize={14}
                    fontWeight={400}
                    color={colors.gray200}
                    onPress={handleGuest}
                >
                    Continue as guest
                </Text>
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    padding: 16px;
    ${Spacing}
`;

export default Onboarding;

const Logo = styled.Image`
    margin: 15% auto;
    /* height: 100px;
    width: 150px; */
`;
