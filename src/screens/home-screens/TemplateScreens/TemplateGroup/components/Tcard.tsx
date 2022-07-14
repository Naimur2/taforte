import React from "react";
import { ICard } from "../../../interfaces/index";
import styled from "styled-components/native";
import { Text } from "../../../../../styled/typography";
import { Spacing } from "../../../../../styled/spacing";

export default function Tcard(props: ICard) {
    return (
        <TCardBody py={16}>
            <Text mb={10} fontWeight={600} fontSize={16}>
                {props.title}
            </Text>
            <InnerCard onPress={props.onPress}>
                <Image source={{ uri: props.frontImage }} />
            </InnerCard>
        </TCardBody>
    );
}

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const TCardBody = styled.View`
    ${Spacing}
`;
const InnerCard = styled.Pressable`
    width: 100%;
    height: 190px;
    overflow: hidden;
    border-radius: 14px;
`;
