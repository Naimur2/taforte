import React from "react";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import { ICard, SpacingProps } from "../../../interfaces/index";
import Icon from "../../../components/Icon";

interface IITCard extends ICard {
    hasShare?: boolean;
    onShare?: () => void;
}

export default function ITCard(props: IITCard) {
    return (
        <TCardBody mb={20} p={16}>
            <InnerCard onPress={props?.onPress}>
                <Image source={{ uri: props?.frontImage }} />
            </InnerCard>
            <HStack pt={props.hasShare ? 10 : 0}>
                <Text mt={12} ml={10} fontWeight={500} fontSize={16}>
                    {props?.title}
                </Text>
                <ShareContainer onPress={props?.onShare}>
                    <Icon name="share" size={20} color={"#848484"} />
                </ShareContainer>
            </HStack>
        </TCardBody>
    );
}

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const TCardBody = styled.View`
    background: ${colors.light200}60;
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

const HStack = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${Spacing}
`;

const ShareContainer = styled.Pressable<SpacingProps>`
    background: #e9e6e6;
    padding: 8px;
    border-radius: 8px;
    ${Spacing}
`;
