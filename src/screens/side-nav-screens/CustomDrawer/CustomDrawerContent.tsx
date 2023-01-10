import React from "react";

import Background from "../../../components/Background";
import { Text } from "../../../styled/typography";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { SpacingProps } from "../../../interfaces";
import DrawerItems from "./DrawerItems/DrawerItems";
const homeBg = require("../../../../assets/images/home-bg.png");

interface CustomDrawerContentProps {
    navigation: any;
}

function CustomDrawerContent() {
    return (
        <Background source={homeBg}>
            <UserInfoContainer>
                <UserAvatar
                    mx={10}
                    source={{
                        uri: "https://graphonomics.net/wp-content/uploads/2019/07/Smiling-Man-4.jpg",
                    }}
                />
                <BoxView>
                    <Text color={"#fff"} fontSize={16} fontWeight={600}>
                        Cameron Williamson
                    </Text>
                    <Text color={"#fff"} fontSize={12} fontWeight={400}>
                        March 23, 1990
                    </Text>
                </BoxView>
            </UserInfoContainer>
            <DrawerItems />
        </Background>
    );
}

const UserInfoContainer = styled.View`
    padding: 0 8px;
    flex: 0.2;
    align-items: center;
    flex-direction: row;
`;

const BoxView = styled.View`
    display: flex;
`;

const UserAvatar = styled.Image<SpacingProps>`
    ${Spacing}
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export default CustomDrawerContent;
