import React from "react";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";

import colors from "./../../themes/colors";

export default function HomeScreen() {
    return (
        <React.Fragment>
            <MainMenu>
                <Card onPress={() => console.log("hello world")}>
                    <InnerCard my="16">
                        <Icon name="add" size={20} color={colors.orange100} />
                    </InnerCard>
                    <Text fontSize={20} fontWeight={"500"}>
                        Add Card
                    </Text>
                    <Text
                        fontSize={14}
                        fontWeight={"400"}
                        color={colors.gray200}
                    >
                        300
                    </Text>
                </Card>
                <Card onPress={() => console.log("hello world")}>
                    <InnerCard my="16">
                        <Icon name="add" size={20} color={colors.orange100} />
                    </InnerCard>
                    <Text fontSize={20} fontWeight={"500"}>
                        Add Card
                    </Text>
                    <Text
                        fontSize={14}
                        fontWeight={"400"}
                        color={colors.gray200}
                    >
                        300
                    </Text>
                </Card>
                <Card onPress={() => console.log("hello world")}>
                    <InnerCard my="16">
                        <Icon name="add" size={20} color={colors.orange100} />
                    </InnerCard>
                    <Text fontSize={20} fontWeight={"500"}>
                        Add Card
                    </Text>
                    <Text
                        fontSize={14}
                        fontWeight={"400"}
                        color={colors.gray200}
                    >
                        300
                    </Text>
                </Card>
                <Card onPress={() => console.log("hello world")}>
                    <InnerCard my="16">
                        <Icon name="add" size={20} color={colors.orange100} />
                    </InnerCard>
                    <Text fontSize={20} fontWeight={"500"}>
                        Add Card
                    </Text>
                    <Text
                        fontSize={14}
                        fontWeight={"400"}
                        color={colors.gray200}
                    >
                        300
                    </Text>
                </Card>
            </MainMenu>
        </React.Fragment>
    );
}

interface Cardprops {
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    backgroundColor?: string;
    bg?: string;
}

const Card = styled.Pressable<Cardprops>`
    ${Spacing}
    background-color: ${colors.light100};
    border-radius: ${(props) => props.borderRadius || 20}px;
    padding: 20px;
    border: ${(props) => props.borderWidth || 2}px solid
        ${(props) => props.borderColor || colors.light200};
    width: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const InnerCard = styled.View<Cardprops>`
    ${Spacing}
    padding: 20px 24px;
    background-color: ${(props) =>
        props.backgroundColor || props.bg || colors.orange200};
    border-radius: ${(props) => props.borderRadius || 8}px;
`;

const MainMenu = styled.View`
    background-color: #fff;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex: 1;
    flex-direction: row;
`;
