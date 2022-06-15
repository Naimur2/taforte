import React from "react";

import styled from "styled-components/native";
import { CardItems } from "../../interfaces/home-interface";
import { Text } from "../../styled/typography";
import colors from "./../../themes/colors";
import MainMenu from "./MainMenu/MainMenu";

export default function HomeScreen() {
    const cards: CardItems[] = [
        {
            icon: "add",
            title: "Add Card",
            innerBackgroundColor: colors.orange200,
            onPress: () => {
                console.log("Home");
            },
        },
        {
            icon: "wallet",
            title: "My Card",
            description: "300",
            innerBackgroundColor: colors.light300,
            borderColor: colors.primary,
            iconColor: colors.primary,
            onPress: () => {
                console.log("Home");
            },
        },
        {
            icon: "scan",
            iconColor: colors.blue100,
            title: "Scanned",
            description: "250",
            innerBackgroundColor: colors.lightBlue100,
            onPress: () => {
                console.log("Home");
            },
        },
        {
            icon: "copy",
            iconColor: colors.blue200,
            title: "Templates",
            description: "1609",
            innerBackgroundColor: colors.lightBlue200,
            onPress: () => {
                console.log("Home");
            },
        },
    ];

    return (
        <React.Fragment>
            <Header>
                {/* <Text fontSize={20} fontWeight={"500"}>
                    Home
                </Text> */}
            </Header>
            <Description>
                <Text color="#fff" fontSize={16} fontWeight="400">
                    Welcome back
                </Text>
                <Text color="#fff" fontSize={24} fontWeight="600">
                    Cameron Willamson
                </Text>
            </Description>
            <MainMenu cards={cards} />
        </React.Fragment>
    );
}

const Description = styled.View`
    flex: 0.1;
    padding: 16px;
`;

const Header = styled.View`
    flex: 0.1;
    padding: 16px;
    /* justify-content: "space-between"; */
    align-items: center;
    flex-direction: row;
`;
