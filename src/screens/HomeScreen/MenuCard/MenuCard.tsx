import React from "react";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { CardItems, MenuCardprops } from "../../../interfaces/home-interface";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

export default function MenuCard(props: CardItems) {
    return (
        <Card onPress={props.onPress} borderColor={props.borderColor}>
            <InnerCard my="16" bg={props.innerBackgroundColor}>
                <Icon
                    name={props.icon || "add"}
                    size={20}
                    color={props.iconColor || colors.orange100}
                />
            </InnerCard>
            <Text my={8} fontSize={20} fontWeight={"500"}>
                {props.title}
            </Text>
            <Text
                mb="4"
                fontSize={14}
                fontWeight={"400"}
                color={colors.gray200}
            >
                {props.description || " "}
            </Text>
        </Card>
    );
}

const Card = styled.Pressable<MenuCardprops>`
    ${Spacing}
    background-color: ${colors.light100};
    border-radius: ${(props) => props.borderRadius || 20}px;
    padding: 20px;
    border: ${(props) => props.borderWidth || 2}px solid
        ${(props) => props.borderColor || colors.light200};
    width: 48%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
`;

const InnerCard = styled.View<MenuCardprops>`
    ${Spacing}
    padding: 20px;
    background-color: ${(props) =>
        props.backgroundColor || props.bg || colors.orange200};
    border-radius: ${(props) => props.borderRadius || 8}px;
`;
