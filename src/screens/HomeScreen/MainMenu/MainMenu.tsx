import React from "react";
import styled from "styled-components/native";

import { ScrollView } from "react-native";
import { CardItems } from "../../../interfaces/home-interface";
import { Container } from "../../../styled/structures";
import MenuCard from "../MenuCard/MenuCard";

export default function MainMenu({ cards }: { cards: CardItems[] }) {
    return (
        <React.Fragment>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flex: 1,
                    paddingTop: 20,
                }}
            >
                <Container flex={1}>
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
                </Container>
            </ScrollView>
        </React.Fragment>
    );
}

const Stack = styled.View`
    padding: 20px 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
