import React from "react";
import Button from "../../../components/Button";
import { Text } from "../../../styled/typography";
import styled from "styled-components/native";
import { SizeProps } from "../../../interfaces";
import { Size } from "../../../styled";
import { Spacing } from "../../../styled/spacing";
import colors from "../../../themes/colors";
import Or from "../../../components/Or";

export default function LoginBottom({ onSubmit }: { onSubmit: () => void }) {
    return (
        <React.Fragment>
            <HStack my={14} width="100%">
                <HStack>
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
