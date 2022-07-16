import React from "react";
import { FlatList, Image as RNImage } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import BSCard from "./components/BSCard";
import { useNavigation } from "@react-navigation/native";
import { getMyCards } from "../../../../DB/my-cards";

const workCard = RNImage.resolveAssetSource(
    require("../../../../assets/images/business-card.png")
).uri;
const personalCard = RNImage.resolveAssetSource(
    require("../../../../assets/images/personal-card.png")
).uri;

interface CardProps {
    _id: number;
    title: string;
    frontImage: string;
    group: string;
}

const MyCard = () => {
    const [cards, setCards] = React.useState<CardProps[]>([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        const data = getMyCards();
        setCards(data);
    }, [navigation]);

    return (
        <Screen>
            <Row>
                <FlatList
                    data={cards}
                    renderItem={({ item }) => (
                        <BSCard
                            onPress={() =>
                                navigation.navigate("ViewMyCard", {
                                    data: item,
                                })
                            }
                            name={item?.title}
                            image={item?.frontImage}
                        />
                    )}
                    keyExtractor={(item, idx) => item?._id + "" + idx}
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
