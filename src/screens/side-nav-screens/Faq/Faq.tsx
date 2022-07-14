import React from "react";

import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import { ICollapsibleProps } from "../../../interfaces/index";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import { Collapseable } from "../../common/Collapsable/Collapsable";

const Faq = () => {
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

    return (
        <Screen pt={30}>
            <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                Top Questions
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container px={16}>
                    {accordions.map((accordion, index) => (
                        <Collapseable
                            key={index}
                            title={accordion.title}
                            text={accordion.text}
                        />
                    ))}
                </Container>
            </ScrollView>
        </Screen>
    );
};

const Container = styled.View`
    display: flex;
    ${Spacing}
`;

export default Faq;
