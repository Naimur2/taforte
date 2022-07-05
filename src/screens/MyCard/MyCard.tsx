import React from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Spacing } from "../../styled/spacing";
import ThreeSwitch from "../common/threeSwitch/ThreeSwitch";
import { FlatList, Image as RNImage, ScrollView } from "react-native";
import colors from "./../../themes/colors";
import { Text } from "../../styled/typography";
import BSCard from "./components/BSCard";

const workCard = RNImage.resolveAssetSource(
    require("../../../assets/images/business-card.png")
).uri;
const personalCard = RNImage.resolveAssetSource(
    require("../../../assets/images/personal-card.png")
).uri;

interface CardProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

const MyCard = () => {
    const [active, setActive] = React.useState<string | number>(1);
    const [cards, setCards] = React.useState<CardProps[]>([]);

    const mapActiveToType: {
        [key: number]: string;
    } = {
        1: "all",
        2: "work",
        3: "personal",
    };

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

    const getFilteredCards = () => {
        const type = mapActiveToType[active];
        switch (type) {
            case "all":
                return cards;
            case "work":
                return cards.filter((card) => card.type === "work");
            case "personal":
                return cards.filter((card) => card.type === "personal");
            default:
                return cards;
        }
    };

    const filteredCards = getFilteredCards() || [];

    return (
        <Screen>
            <VStack mt={30} px={16}>
                <ThreeSwitch onPress={(curr) => setActive(curr)} />
            </VStack>
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

const VStack = styled.View`
    flex: 0.1;
    ${Spacing}
`;

const Row = styled.View`
    flex: 0.9;
`;

export default MyCard;
