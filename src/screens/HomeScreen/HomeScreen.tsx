import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import { CardItems } from "../../interfaces/home-interface";

import { Text } from "../../styled/typography";
import colors from "./../../themes/colors";
import MainMenu from "./MainMenu/MainMenu";
import Background from "../../components/Background";
import { Box } from "../../styled/structures";

export default function HomeScreen() {
    const navigation = useNavigation();

    const cards: CardItems[] = [
        {
            icon: "add",
            title: "Add Card",
            innerBackgroundColor: colors.orange200,
            onPress: () => {
                navigation.navigate("AddCard");
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
            <Background>
                <Header>
                    <Box onPress={() => navigation.openDrawer()}>
                        <Icon name="hamburger" size={20} color={"#fff"} />
                    </Box>
                    <Avatar
                        source={{
                            uri: "https://graphonomics.net/wp-content/uploads/2019/07/Smiling-Man-4.jpg",
                        }}
                    />
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
            </Background>
        </React.Fragment>
    );
}

const Description = styled.View`
    flex: 0.12;
    padding: 16px;
`;

const Header = styled.View`
    flex: 0.08;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 10px;
`;
