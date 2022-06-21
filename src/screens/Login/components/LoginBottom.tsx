import React from "react";
import styled from "styled-components/native";
import Button from "../../../components/Button";
import Or from "../../../components/Or";
import SocialLogin from "../../../components/SocialLogin";
import TwoText from "../../../components/TwoText";
import { CheckBox, Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

export default function LoginBottom({ onSubmit }: { onSubmit: () => void }) {
    const [isChecked, setIsChecked] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <HStack my={14} width="100%">
                <HStack>
                    <CheckBox
                        color={colors.primary}
                        value={isChecked}
                        onValueChange={(value) => setIsChecked(value)}
                    />
                    <Text color={colors.gray200} fontSize={14} fontWeight={400}>
                        Remind me
                    </Text>
                </HStack>
                <Text color={colors.primary} fontSize={14} fontWeight={400}>
                    Forgot Password?
                </Text>
            </HStack>
            <Button
                onPress={onSubmit}
                mt={"10%"}
                text="Login"
                variant="primary"
            />
            <Or />
            <SocialLogin />
            <TwoText text="Dont have an account?" coloredText="Login" />
        </React.Fragment>
    );
}

const HStack = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${Size}
    ${Spacing}
`;
