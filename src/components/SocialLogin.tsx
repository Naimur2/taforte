import React from "react";
import styled from "styled-components/native";
import Icon from "./Icon";
import colors from "../themes/colors";
import { Spacing } from "../styled/spacing";
const google = require("../../assets/images/google.png");

export default function SocialLogin({
    onPress,
}: {
    onPress: (type: string) => void;
}) {
    const handleClick = (type: string): void => {
        if (onPress) {
            onPress(type);
        }
    };

    return (
        <Stack my={16}>
            <IconContainer onPress={handleClick("facebook")}>
                <Icon name="facebook" size={24} color={colors.blue300} />
            </IconContainer>
            <IconContainer onPress={handleClick("apple")}>
                <Icon name="apple" size={24} color={"#000"} />
            </IconContainer>
            <IconContainer onPress={handleClick("google")}>
                <IconImage source={google} />
            </IconContainer>
        </Stack>
    );
}

const Stack = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    ${Spacing}
`;
const IconContainer = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31%;
    border: 1px solid ${colors.light200};
    padding: 10px;
    border-radius: 50px;
`;
const IconImage = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 15px;
`;
