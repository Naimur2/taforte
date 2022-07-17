import React from "react";
import { FlatList, Image as RNImage } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import BSCard from "./components/BSCard";
import { useNavigation } from "@react-navigation/native";
import { getMyCards } from "../../../../DB/my-cards";
import Empty from "../../common/Empty/Empty";
import { Text } from "../../../styled/typography";
import Button from "../../../components/Button";

interface CardProps {
    _id: number;
    title: string;
    frontImage: string;
    group: string;
}

const MyCard = () => {
    const [cards, setCards] = React.useState<CardProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        setIsLoading(true);
        const data = getMyCards();
        setCards(data);
        setIsLoading(false);
    }, [navigation]);

    return (
        <Screen>
            <Row>
                {!isLoading && cards?.length === 0 && (
                    <Empty>
                        <Text fontWeight={500}>
                            You haven't save any cards.{" "}
                        </Text>
                        <Button
                            text="Browse Cards"
                            onPress={() => navigation.navigate("Templates")}
                            mt={"20%"}
                        />
                    </Empty>
                )}
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
