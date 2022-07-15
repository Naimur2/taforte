import React from "react";
import { ICard } from "../../../interfaces/index";
import styled from "styled-components/native";
import { Text } from "../../../../../styled/typography";
import { Spacing } from "../../../../../styled/spacing";
import colors from "../../../../../themes/colors";

export default function ITCard(props: ICard) {
    return (
        <TCardBody mb={20} p={16}>
            <InnerCard onPress={props.onPress}>
                <Image source={{ uri: props.frontImage }} />
            </InnerCard>
            <Text mt={12} ml={10} fontWeight={500} fontSize={16}>
                {props.title}
            </Text>
        </TCardBody>
    );
}

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const TCardBody = styled.View`
    background: ${colors.light200}70;
    border: 1px solid ${colors.light200};
    border-radius: 16px;
    ${Spacing}
`;
const InnerCard = styled.Pressable`
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 14px;
`;
