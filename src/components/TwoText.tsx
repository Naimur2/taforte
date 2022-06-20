import React from "react";
import { Size } from "../styled";
import { Spacing } from "../styled/spacing";
import { Text } from "../styled/typography";
import styled from "styled-components/native";
import colors from "../themes/colors";

interface IProps {
    onPress: () => void;
    text?: string;
    coloredText?: string;
}

export default function TwoText({ onPress, text, coloredText }: IProps) {
    return (
        <TwoTextContainer my={10}>
            <Text fontSize={14} fontWeight={400}>
                {text}
            </Text>
            <Text
                onPress={onPress}
                color={colors.primary}
                fontSize={14}
                fontWeight={400}
                ml={10}
            >
                {coloredText}
            </Text>
        </TwoTextContainer>
    );
}

const TwoTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${Size}
    ${Spacing}
`;
