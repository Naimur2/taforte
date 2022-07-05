import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

interface Props {
    image?: string;
    name?: string;
    onPress?: () => void;
}

const BSCard = (props: Props) => {
    return (
        <BusinessCard onPress={props?.onPress}>
            <CardImage source={{ uri: props?.image }} />
            <Text fontWeight={600} mt={10} fontSize={16} mx={"auto"}>
                {props?.name}
            </Text>
        </BusinessCard>
    );
};

const BusinessCard = styled.Pressable`
    width: 48%;
    padding: 16px;
    border: 1px solid ${colors.light200};
    border-radius: 16px;
    margin-bottom: 16px;
`;

const CardImage = styled.Image`
    width: 100%;
    height: 82px;
    border-radius: 10px;
`;

export default BSCard;
