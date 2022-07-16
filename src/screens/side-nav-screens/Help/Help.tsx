import React from "react";

import Screen from "../../../components/Screen";
import IconCard from "../../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import Button from "../../../components/Button";
import { Text } from "../../../styled/typography";
import { ScrollView } from "react-native";
import { ICollapsibleProps } from "../../../interfaces";
import { Collapseable } from "../../common/Collapsable/Collapsable";

interface REsources {
    id: number;
    title: string;
}
const accordions: ICollapsibleProps = [
    {
        title: "What is the purpose of this app?",
        text: "This app is designed to help you keep track of your business cards. It will help you to keep track of your business cards and personal cards. You can also add new cards to your list.",
    },
    {
        title: "How do I add a new card?",
        text: "You can add a new card by clicking on the + button in the top right corner of the screen. You can also add a new card by clicking on the + button in the top right corner of the screen.",
    },
    {
        title: "How do I delete a card?",
        text: "You can delete a card by clicking on the trash icon in the top right corner of the screen. You can also delete a card by clicking on the trash icon in the top right corner of the screen.",
    },
    {
        title: "How do I edit a card?",
        text: "You can edit a card by clicking on the edit icon in the top right corner of the screen. You can also edit a card by clicking on the edit icon in the top right corner of the screen.",
    },
];

const Help = () => {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Vstack pt={50} px={16}>
                    <Text fontWeight={600} fontSize={18} mb={20}>
                        Popular help resources
                    </Text>
                    {accordions.map((accordion, index) => (
                        <Collapseable
                            key={index}
                            title={accordion.title}
                            text={accordion.text}
                        />
                    ))}

                    <Button my={20} text="Send Feedback" />
                </Vstack>
            </ScrollView>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

export default Help;
