import React from "react";
import styled from "styled-components/native";
import { Size } from "../styled";
import { Spacing } from "../styled/spacing";
import { Text } from "../styled/typography";
import colors from "../themes/colors";
import { SpacingProps } from "../interfaces/index";

export default function Or({ ...spacing }: SpacingProps) {
    return (
        <Orcontainer {...spacing}>
            <Hr />
            <Text fontSize={12} color={colors.black100} px={16}>
                OR
            </Text>
            <Hr />
        </Orcontainer>
    );
}

const Orcontainer = styled.View`
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${Spacing}
    ${Size}
`;

const Hr = styled.View`
    display: flex;
    height: 2px;
    width: 45%;
    background-color: ${colors.gray400};
`;
