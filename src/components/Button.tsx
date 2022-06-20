import React from "react";
import { Text } from "../styled/typography";
import styled from "styled-components/native";
import { SpacingProps, SizeProps } from "../interfaces/index";
import colors from "../themes/colors";
import { Spacing } from "../styled/spacing";

interface CustomBtnProps extends SpacingProps, SizeProps {
    onPress: () => void;
    text: string;
    variant?: "primary" | "light" | "dark";
}

export default function Button({
    onPress,
    text,
    variant = "primary",
    ...rest
}: CustomBtnProps) {
    return (
        <CustomBtn variant={variant} onPress={onPress} {...rest}>
            <Text mx="auto" color={"#fff"} fontSize={16} fontWeight={700}>
                {text}
            </Text>
        </CustomBtn>
    );
}

const CustomBtn = styled.TouchableOpacity`
    background: ${colors.primary};
    padding: 16px 20px;
    width: 100%;
    border-radius: 8px;
    ${Spacing}
`;
