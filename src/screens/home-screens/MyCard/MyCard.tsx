import React from "react";
import { FlatList, Image as RNImage } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import BSCard from "./components/BSCard";

const workCard = RNImage.resolveAssetSource(
    require("../../../../assets/images/business-card.png")
).uri;
const personalCard = RNImage.resolveAssetSource(
    require("../../../../assets/images/personal-card.png")
).uri;

interface CardProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

const MyCard = () => {
    const [cards, setCards] = React.useState<CardProps[]>([]);

    const cardsData: CardProps[] = [
        {
            id: 1,
            name: "Work",
            image: workCard,
            type: "work",
        },
        {
            id: 2,
            name: "Personal",
            image: personalCard,
            type: "personal",
        },
        {
            id: 3,
            name: "Work",
            image: workCard,
            type: "work",
        },
        {
            id: 4,
            name: "Personal",
            image: personalCard,
            type: "personal",
        },
        {
            id: 5,
            name: "Work",
            image: workCard,
            type: "work",
        },
        {
            id: 6,
            name: "Personal",
            image: personalCard,
            type: "personal",
        },
        {
            id: 7,
            name: "Work",
            image: workCard,
            type: "work",
        },
        {
            id: 8,
            name: "Personal",
            image: personalCard,
            type: "personal",
        },
    ];

    React.useEffect(() => {
        setCards(cardsData);
    }, []);

    const filteredCards = cards;

    return (
        <Screen>
            <Row>
                <FlatList
                    data={filteredCards}
                    renderItem={({ item }) => <BSCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        paddingHorizontal: 16,
                    }}
                    contentContainerStyle={{
                        paddingVertical: 16,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </Row>
        </Screen>
    );
};

const Row = styled.View`
    flex: 1;
`;

export default MyCard;
