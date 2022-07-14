import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import { ICard } from "../../../interfaces/index";

export default function SCard({ image, title, onPress }: ICard) {
    return (
        <Card onPress={onPress}>
            <CardImage
                source={{
                    uri: image,
                }}
            />
            <Text mt={10} mx={"auto"} fontSize={16} fontWeight={600}>
                {title}
            </Text>
        </Card>
    );
}

const Card = styled.Pressable`
    background-color: ${colors.light200}70;
    width: 250px;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid ${colors.light200};
    margin: 0 10px;
`;

const CardImage = styled.Image`
    width: 100%;
    height: 130px;
    border-radius: 30px;
`;
