import React from "react";
import { Text } from "../styled/typography";
import styled from "styled-components/native";
import { SpacingProps, SizeProps } from "../interfaces/index";
import colors from "../themes/colors";
import { Spacing } from "../styled/spacing";

interface Variants {
    [key: string]: VariantObj;
}
interface CustomBtnProps extends SpacingProps, SizeProps {
    onPress: () => void;
    text: string;
    variant?: "primary" | "light" | "dark" | "gray";
}

const variants: Variants = {
    primary: {
        backgroundColor: colors.primary,
        textColor: "#fff",
        borderColor: colors.primary,
    },
    light: {
        backgroundColor: "#fff",
        textColor: colors.secondary,
        borderColor: colors.primary,
    },
    gray: {
        backgroundColor: "#fff",
        textColor: colors.gray600,
        borderColor: colors.gray600,
    },
};

export default function Button({
    onPress,
    text,
    variant = "primary",
    ...rest
}: CustomBtnProps) {
    return (
        <CustomBtn variant={variant} onPress={onPress} {...rest}>
            <Text
                mx="auto"
                color={variants[variant].textColor}
                fontSize={16}
                fontWeight={700}
            >
                {text}
            </Text>
        </CustomBtn>
    );
}

interface VariantObj {
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
}

const CustomBtn = styled.TouchableOpacity`
    background: ${(props: CustomBtnProps) =>
        props.variant
            ? variants[props.variant].backgroundColor
            : colors.primary};
    padding: 16px 20px;
    width: 100%;
    border-radius: 8px;
    ${(props: CustomBtnProps) =>
        variants[props.variant].borderColor &&
        `border: 1px solid ${variants[props.variant].borderColor}`};

    ${Spacing}
`;
