import React from "react";
import styled from "styled-components/native";

import { CardItems } from "../../../interfaces/home-interface";
import MenuCard from "../MenuCard/MenuCard";
import { Spacing } from "./../../../styled/spacing";
import { SpacingProps } from "../../../interfaces/index";
import { ScrollView } from "react-native";

export default function MainMenu({ cards }: { cards: CardItems[] }) {
    return (
        <React.Fragment>
            <MainCardMenu>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <Stack>
                        {cards.map((card, index) => (
                            <MenuCard
                                icon={card.icon}
                                key={index.toString()}
                                onPress={card.onPress}
                                title={card.title}
                                description={card.description}
                                innerBackgroundColor={card.innerBackgroundColor}
                                iconColor={card.iconColor}
                                borderColor={card.borderColor}
                            />
                        ))}
                    </Stack>
                </ScrollView>
            </MainCardMenu>
        </React.Fragment>
    );
}

const MainCardMenu = styled.View<SpacingProps>`
    ${Spacing}
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    flex: 1;
    padding: 20px 0;
`;

const Stack = styled.View`
    padding: 20px 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
