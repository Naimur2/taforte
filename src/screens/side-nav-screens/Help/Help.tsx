import React from "react";

import Screen from "../../../components/Screen";
import IconCard from "../../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import Button from "../../../components/Button";
import { Text } from "../../../styled/typography";
import { ScrollView } from "react-native";

interface REsources {
    id: number;
    title: string;
}

const Help = () => {
    const resources: REsources[] = [
        {
            id: 1,
            title: "How to redeem premium code?",
        },
        {
            id: 2,
            title: "How to reset my login password?",
        },
        {
            id: 3,
            title: "How to set the recognition languages?",
        },
        {
            id: 4,
            title: "How can I get the support if I have problems or questions?",
        },
        {
            id: 5,
            title: "How to sync cards on the phone to CamCard cloud?",
        },
        {
            id: 6,
            title: 'My phone has connected with WiFi. Why I got the message " Sync failed" ?',
        },
        {
            id: 7,
            title: "How to continue the paid version if I changed my phone?",
        },
    ];

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Vstack pt={50} px={16}>
                    <Text fontWeight={600} fontSize={18} mb={20}>
                        Popular help resources
                    </Text>
                    {resources.map((item, index) => (
                        <IconCard key={index} mb={16} tittle={item.title} />
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
