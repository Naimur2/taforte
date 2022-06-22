import React from "react";
import styled from "styled-components/native";
import Button from "../../components/Button";
import Or from "../../components/Or";
import SocialLogin from "../../components/SocialLogin";
import TwoText from "../../components/TwoText";
import { CheckBox, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";
import colors from "../../themes/colors";

interface AuthBottomProps {
    checked?: boolean;
    bottomText?: string;
    bottomColoredText?: string;
    onSubmit?: () => void;
    onChecked?: (checked: boolean) => void;
    onSocialLogin?: (type: string) => void;
    onColoredPress?: () => void;
    hideForgotPassword?: boolean;
    submitText?: string;
    onForgetPassword?: () => void;
}

const AuthBottom = ({
    onSubmit,
    onChecked,
    checked,
    onSocialLogin,
    onColoredPress,
    bottomText,
    bottomColoredText,
    hideForgotPassword,
    submitText,
    onForgetPassword,
}: AuthBottomProps) => {
    return (
        <React.Fragment>
            {!hideForgotPassword && (
                <HStack my={14} width="100%">
                    <HStack>
                        <CheckBox
                            color={colors.primary}
                            value={checked}
                            onValueChange={onChecked}
                        />
                        <Text
                            color={colors.gray200}
                            fontSize={14}
                            fontWeight={400}
                        >
                            Remind me
                        </Text>
                    </HStack>
                    <Text
                        onPress={onForgetPassword}
                        color={colors.primary}
                        fontSize={14}
                        fontWeight={400}
                    >
                        Forgot Password?
                    </Text>
                </HStack>
            )}
            <Button
                onPress={onSubmit}
                mt={"10%"}
                text={submitText || "Login"}
                variant="primary"
            />
            <Or />
            <SocialLogin onPress={onSocialLogin} />
            <TwoText
                onPress={onColoredPress}
                text={bottomText}
                coloredText={bottomColoredText}
            />
        </React.Fragment>
    );
};

const HStack = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${Size}
    ${Spacing}
`;
export default React.memo(AuthBottom);
